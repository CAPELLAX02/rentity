import React from 'react';
import { FaShare } from 'react-icons/fa';

const ShareButtons = ({ property }) => {
  return (
    <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-md flex items-center justify-center duration-200'>
      <FaShare className='mr-2' /> Share Property
    </button>
  );
};

export default ShareButtons;
