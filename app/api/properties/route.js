import connectDB from '@/config/database';
import Property from '@/models/Property';

/**
 * Get all properties
 */
export const GET = async () => {
  try {
    await connectDB();

    const properties = await Property.find({});

    if (!properties) {
      return new Response('Properties not found.', { status: 404 });
    }

    return new Response(properties, { status: 200 });
  } catch (error) {
    return new Response(`Error fetching properties [${error}]`, {
      status: 500,
    });
  }
};
