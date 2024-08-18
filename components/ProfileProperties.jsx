'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const ProfileProperties = ({ properties: initialProperties }) => {
  const [properties, setProperties] = useState(initialProperties);

  const router = useRouter();

  return properties.map((property) => {
    return (
      <div key={property._id} className='mb-10'>
        <Link href={`properties/${property._id}`}>
          <Image
            className='h-32 w-full rounded-md object-cover'
            src={property.images[0]}
            alt='property-image'
            width={1000}
            height={200}
          />
        </Link>
        <div className='mt-2'>
          <p className='text-lg font-semibold'>{property.name}</p>
          <p className='text-gray-600'>
            {property.location.street} {property.location.city}{' '}
            {property.location.state}
          </p>
        </div>
        <div className='mt-2'>
          <button
            className='text-blue-700 rounded-md mr-2 bg-blue-100 hover:bg-blue-200 duration-200'
            type='button'
            onClick={() => router.push('/properties')}
          >
            <div className='flex gap-2 px-3 py-2'>
              <FaEdit className='my-auto' />
              <p className=''>Edit Property</p>
            </div>
          </button>
          {/* <Link
            href='/add-property.html'
            className='bg-blue-200 text-blue-700 py-2 px-3 rounded-md mr-2 hover:bg-blue-300 duration-200'
          >
            Edit
          </Link> */}
          <button
            className='text-red-600 rounded-md mr-2 bg-red-100 hover:bg-red-200 duration-200'
            type='button'
          >
            <div className='flex gap-2 px-3 py-2'>
              <FaTrashAlt className='my-auto' />
              <p className=''>Delete Property</p>
            </div>
          </button>
        </div>
      </div>
    );
  });
};

export default ProfileProperties;
