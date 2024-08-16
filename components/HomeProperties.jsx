import properties from '@/properties.json';
import PropertyCard from './PropertyCard';
import Link from 'next/link';

const HomeProperties = () => {
  const recentProperties = properties.slice(0, 3);

  return (
    <>
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          <h2 className='text-3xl font-bold text-amber-600 mb-6 text-center'>
            Recent Properties
          </h2>
          {properties.length === 0 ? (
            <p>No properties found.</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
              {recentProperties.map((property) => {
                return <PropertyCard key={property._id} property={property} />;
              })}
            </div>
          )}
        </div>
      </section>

      <section className='m-auto max-w-lg mb-12 px-14'>
        <Link
          href='/properties'
          className='block bg-blue-500 text-white font-semibold text-center py-3 px-5 rounded-xl text-xl hover:bg-amber-500 duration-200'
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
