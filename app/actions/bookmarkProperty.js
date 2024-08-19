'use server';

import connectDB from '@/config/database';
import User from '@/models/User';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

export const bookmarkProperty = async (propertyId) => {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('User ID is required, yet not found.');
  }

  const { userId } = sessionUser;

  const user = await User.findById(userId);

  if (!user) {
    throw new Error('User not found.');
  }

  let isBookmarked = user.bookmarks.includes(propertyId);
  let message;

  if (isBookmarked) {
    // If already bookmarked, then remove
    user.bookmarks.pull(propertyId);
    message = 'Bookmark removed successfully.';
  } else {
    // If not bookmarked, then add
    user.bookmarks.push(propertyId);
    message = 'Bookmark added successfully.';
  }
  isBookmarked = !isBookmarked;

  await user.save();

  revalidatePath('/properties/saved', 'page');

  return { message, isBookmarked };
};
