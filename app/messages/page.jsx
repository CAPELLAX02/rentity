import MessageCard from '@/components/MessageCard';
import connectDB from '@/config/database';
import Message from '@/models/Message';
import '@/models/Property';
import { convertToSerializableObject } from '@/utils/convertToObjects';
import { getSessionUser } from '@/utils/getSessionUser';

const MessagesPage = async () => {
  await connectDB();

  const { userId } = await getSessionUser();

  const readMessages = await Message.find({ recipient: userId, read: true })
    .sort({ createdAt: -1 })
    .populate('sender', 'username')
    .populate('property', 'name')
    .lean();

  const unreadMessages = await Message.find({ recipient: userId, read: false })
    .sort({ createdAt: -1 })
    .populate('sender', 'username')
    .populate('property', 'name')
    .lean();

  const messages = [...unreadMessages, ...readMessages].map((messageDoc) => {
    const message = convertToSerializableObject(messageDoc);
    message.sender = convertToSerializableObject(messageDoc.sender);
    message.property = convertToSerializableObject(messageDoc.property);
    return message;
  });

  return (
    <section className='bg-blue-50'>
      <div className='container m-auto py-24 max-w-6xl'>
        <div className='bg-white px-6 py-8 shadow-md rounded-md border m-4 md:m-0'>
          <h1 className='text-3xl font-bold mb-4'>Your Messages</h1>
          <div className='space-y-4'>
            {messages.length === 0 ? (
              <p>You have no messages</p>
            ) : (
              messages.map((message) => {
                return <MessageCard key={message._id} message={message} />;
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagesPage;
