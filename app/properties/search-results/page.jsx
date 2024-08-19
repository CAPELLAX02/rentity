import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import PropertyCard from '@/components/PropertyCard';
import PropertySearchForm from '@/components/PropertySearchForm';

import connectDB from '@/config/database';
import Property from '@/models/Property';
import { convertToSerializableObject } from '@/utils/convertToObjects';

const SearchResultsPage = async ({
  searchParams: { location, propertyType },
}) => {
  await connectDB();

  const locationPattern = new RegExp(location, 'i');

  // Match location pattern against database fields
  let query = {
    $or: [
      { name: locationPattern },
      { description: locationPattern },
      { 'location.street': locationPattern },
      { 'location.city': locationPattern },
      { 'location.state': locationPattern },
      { 'location.zipcode': locationPattern },
    ],
  };

  // Only check for property if its not 'All'
  if (propertyType && propertyType !== 'All') {
    const typePattern = new RegExp(propertyType, 'i');
    query.type = typePattern;
  }

  const propertiesQueryResults = await Property.find(query).lean();
  const properties = convertToSerializableObject(propertiesQueryResults);

  return (
    <>
      <section className='bg-amber-500 py-5'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PropertySearchForm />
        </div>
      </section>
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          <Link
            href='/properties'
            className='text-blue-500 hover:text-white hover:bg-blue-500 items-center rounded-md border-2 hover:border-blue-500 border-blue-500 duration-200 inline-flex px-3 py-1'
          >
            <FaArrowAltCircleLeft className='mr-2' /> Back to Properties
          </Link>
          <h1 className='text-2xl my-5'>Search Results</h1>
          {properties.length === 0 ? (
            <p>No search results found</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SearchResultsPage;
