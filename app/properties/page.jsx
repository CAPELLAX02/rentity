import PropertyCard from '@/components/PropertyCard';

import connectDB from '@/config/database';
import Property from '@/models/Property';

/**
 * There will be a filtering component here.
 */

const PropertiesPage = async () => {
  await connectDB();

  const properties = await Property.find({}).lean();

  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        {properties.length === 0 ? (
          <p>No properties found.</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {properties.map((property) => {
              return <PropertyCard key={property._id} property={property} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
