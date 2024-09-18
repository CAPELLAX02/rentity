'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { deleteProperty } from '@/app/actions/deleteProperty';

const ProfileProperties = ({ properties: initialProperties }) => {
  const [properties, setProperties] = useState(initialProperties);

  const router = useRouter();

  const handleDeleteProperty = async (propertyId) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      await deleteProperty(propertyId);

      const updatedProperties = properties.filter(
        (property) => property._id !== propertyId
      );

      setProperties(updatedProperties);

      toast.success('Property Deleted Successfully.', {
        theme: 'colored',
      });
    }
  };

  return properties.map((property) => {
    return (
      <div key={property._id} className="mb-10">
        <Link href={`properties/${property._id}`}>
          <Image
            className="h-32 w-full rounded-md object-cover"
            src={property.images[0]}
            alt="property-image"
            width={1000}
            height={200}
          />
        </Link>
        <div className="mt-2">
          <p className="text-lg font-semibold">{property.name}</p>
          <p className="text-gray-600">
            {property.location.street} {property.location.city}{' '}
            {property.location.state}
          </p>
        </div>
        <div className="mt-2">
          <button
            className="text-blue-700 rounded-md mr-2 bg-blue-100 hover:bg-blue-200 duration-200"
            type="button"
            onClick={() => router.push(`/properties/${property._id}/edit`)}
          >
            <div className="flex gap-2 px-3 py-2">
              <FaEdit className="my-auto" />
              <p className="">Edit Property</p>
            </div>
          </button>

          <button
            className="text-red-600 rounded-md mr-2 bg-red-100 hover:bg-red-200 duration-200"
            type="button"
            onClick={() => handleDeleteProperty(property._id)}
          >
            <div className="flex gap-2 px-3 py-2">
              <FaTrashAlt className="my-auto" />
              <p className="">Delete Property</p>
            </div>
          </button>
        </div>
      </div>
    );
  });
};

export default ProfileProperties;
