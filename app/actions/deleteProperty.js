'use server';

import cloudinary from '@/config/cloudinary';
import connectDB from '@/config/database';
import Property from '@/models/Property';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

export const deleteProperty = async (propertyId) => {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('User ID required yet not found.');
  }

  const { userId } = sessionUser;

  await connectDB();

  const property = await Property.findById(propertyId);

  if (!property) {
    throw new Error('Property not found.');
  }

  // Verify the ownership
  if (property.owner.toString() !== userId) {
    throw new Error('Unauthorized attempt.');
  }

  // Extract public ID from image URLs
  const publicIDs = property.images.map((imageURL) => {
    const parts = imageURL.split('/');
    return parts.at(-1).split('.').at(0); // Get the image name as a string
  });

  // Delete images from Cloudinary
  if (publicIDs.length > 0) {
    for (let publicID of publicIDs) {
      await cloudinary.uploader.destroy('rentity/' + publicID);
    }
  }

  await property.deleteOne();

  revalidatePath('/', 'layout');
};
