import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import PropertyDetails from '@/components/PropertyDetails';

import connectDB from '@/config/database';
import Property from '@/models/Property';
import Link from 'next/link';
import { FaArrowCircleLeft } from 'react-icons/fa';

const PropertyPage = async ({ params }) => {
  await connectDB();

  const property = await Property.findById(params.id);

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            href='/properties'
            className='text-blue-500 hover:text-white hover:bg-blue-500 items-center rounded-lg border-2 hover:border-blue-500 border-blue-500 duration-200 inline-flex px-3 py-2'
          >
            <FaArrowCircleLeft className='mr-2' /> Back to Properties
          </Link>
        </div>
      </section>
      <section class='bg-blue-50'>
        <div class='container m-auto py-10 px-6'>
          <div class='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <PropertyDetails property={property} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyPage;
