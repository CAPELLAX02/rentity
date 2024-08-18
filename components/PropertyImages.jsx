import Image from 'next/image';
import React from 'react';

const PropertyImages = ({ images }) => {
  return (
    <section className='bg-blue-50 p-4'>
      <div className='container mx-auto'>
        {images.length === 1 ? (
          <Image
            src={images[0]}
            alt='property-image'
            className='object-cover h-[400px] mx-auto rounded-xl'
            width={1800}
            height={400}
            priority={true}
          />
        ) : (
          <div className='grid grid-cols-2 gap-4'>
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    images.length % 2 !== 0 && index === images.length - 1
                      ? 'col-span-2'
                      : 'col-span-1'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`property-image-${index}`}
                    className='object-cover h-[400px] w-full rounded-xl'
                    width={1800}
                    height={400}
                    priority={true}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyImages;
