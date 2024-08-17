'use client';

import Link from 'next/link';
import { FaExclamationCircle } from 'react-icons/fa';

const ErrorPage = ({ error }) => {
  return (
    <section className='bg-blue-50 min-h-screen flex-grow'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-16 py-24 mb-4 shadow-md border m-4 md:m-0 rounded-xl'>
          <div className='flex justify-center'>
            <FaExclamationCircle className='text-yellow-400 text-7xl fa-5x' />
          </div>
          <div className='text-center'>
            <h1 className='text-3xl font-bold mt-4 mb-2'>
              Something went wrong.
            </h1>
            <p className='text-gray-500 text-lg mb-10'>{error.toString()}</p>
            <Link
              href='/'
              className='bg-blue-600 hover:bg-amber-500 text-white font-bold py-3 px-4 rounded-lg text-lg duration-200'
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-grow'></div>
    </section>
  );
};

export default ErrorPage;
