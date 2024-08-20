'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { markMessageAsRead } from '@/app/actions/markMessageAsRead';

const MessageCard = ({ message }) => {
  const [isRead, setIsRead] = useState(message.read);

  const handleReadMessage = async () => {
    const read = await markMessageAsRead(message._id);
    setIsRead(read);
    toast.success(`Marked as ${read ? 'Read' : 'New'}`);
  };

  return (
    <div className="relative bg-white p-4 rounded-md shadow-md border-gray-200">
      {!isRead && (
        <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-md">
          New
        </div>
      )}
      <h2 className="text-xl mb-4">
        <span className="font-bold">Property Inquiry: </span>{' '}
        {message.property.name}
      </h2>
      <p className="text-gray-700">{message.body}</p>
      <ul className="mt-4">
        <li>
          <strong>Reply Email: </strong>{' '}
          <a href={`mailto:${message.email}`} className="text-blue-500">
            {message.email}
          </a>
        </li>
        <li>
          <strong>Reply Phone: </strong>{' '}
          <a href={`tel:${message.phone}`} className="text-blue-500">
            {message.phone}
          </a>
        </li>
        <li>
          <strong>Received: </strong>{' '}
          {new Date(message.createdAt).toLocaleString().split(' ')[0]} -{' '}
          {new Date(message.createdAt).toLocaleString().split(' ')[1]}
        </li>
        <ul>
          <button
            onClick={handleReadMessage}
            className="mt-4 mr-3 bg-blue-500 text-white py-1 px-3 rounded-md"
          >
            {isRead ? 'Marked as New' : 'Marked as Read'}
          </button>
          <button className="mt-4 mr-3 bg-red-500 text-white py-1 px-3 rounded-md">
            Delete Message
          </button>
        </ul>
      </ul>
    </div>
  );
};

export default MessageCard;
