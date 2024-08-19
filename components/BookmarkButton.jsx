'use client';

import { useState, useEffect } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { bookmarkProperty } from '@/app/actions/bookmarkProperty';
import { checkBookmarkStatus } from '@/app/actions/checkBookmarkStatus';
import { useSession } from 'next-auth/react';
import Spinner from './Spinner';

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    checkBookmarkStatus(property._id).then((response) => {
      if (response.error) {
        toast.error('You need to be signed in to bookmark a listing.', {
          theme: 'colored',
        });
      } else if (response.isBookmarked) {
        setIsBookmarked(response.isBookmarked);
      }
      setIsLoading(false);
    });
  }, [property._id, userId]);

  const handleClick = async () => {
    if (!userId) {
      toast.error('You need to be signed in to bookmark a listing.', {
        theme: 'colored',
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await bookmarkProperty(property._id);
      if (response.error) {
        toast.error(`Something went wrong. [${response.error}]`, {
          theme: 'colored',
        });
      } else {
        setIsBookmarked(response.isBookmarked);
        toast.success(response.message, {
          theme: 'colored',
        });
      }
    } catch (error) {
      toast.error('An unexpected error occurred.', {
        theme: 'colored',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading)
    return (
      <Spinner
        size={32}
        customCssOverride={{
          display: 'block',
          margin: '8px auto',
        }}
      />
    );

  return (
    <button
      className={`${
        isBookmarked
          ? 'bg-transparent hover:bg-pink-600 text-pink-600 hover:text-white border-pink-500 hover:border-pink-600'
          : 'bg-blue-500 hover:bg-blue-600 text-white border-blue-500 hover:border-blue-600'
      } font-bold w-full py-2 px-4 rounded-md flex items-center justify-center duration-200 border-2`}
      onClick={handleClick}
      disabled={isLoading}
    >
      <FaBookmark className='mr-2' />
      {isBookmarked ? 'Remove Bookmark' : 'Bookmark Property'}
    </button>
  );
};

export default BookmarkButton;
