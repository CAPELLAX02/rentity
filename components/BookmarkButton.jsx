import { FaBookmark } from 'react-icons/fa';

const BookmarkButton = ({ property }) => {
  return (
    <button className='bg-pink-500 hover:bg-pink-600 text-white font-bold w-full py-2 px-4 rounded-md flex items-center justify-center duration-200'>
      <FaBookmark className='mr-2' /> Bookmark Property
    </button>
  );
};

export default BookmarkButton;
