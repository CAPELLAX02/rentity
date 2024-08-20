'use server';

import connectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

export const markMessageAsRead = async (messageId) => {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('User ID is required, yet not found.');
  }

  const { userId } = sessionUser;

  const message = await Message.findById(messageId);

  if (!message) {
    throw new Error('Message not found.');
  }

  // Verify the ownership of the message
  if (message.recipient.toString() !== userId) {
    throw new Error('Unauthorized attempt.');
  }

  message.read = !message.read;

  revalidatePath('/messages', 'page');

  await message.save();

  return message.read;
};
