import Link from 'next/link';

const Pagination = ({ page, pageSize, totalItems }) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  return (
    <section className="container mx-auto flex justify-center items-center my-8">
      {page > 1 ? (
        <Link
          className="mr-2 px-3 py-1 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition duration-200 ease-in-out flex items-center"
          href={`/properties?page=${page - 1}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </Link>
      ) : (
        <span className="mr-2 px-3 py-1 border border-gray-300 rounded-md shadow-sm text-gray-400 cursor-not-allowed flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </span>
      )}

      <span className="mx-4 text-gray-700 font-semibold">
        Page {page} of {totalPages}
      </span>

      {page < totalPages ? (
        <Link
          className="ml-2 px-3 py-1 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition duration-200 ease-in-out flex items-center"
          href={`/properties?page=${page + 1}`}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      ) : (
        <span className="ml-2 px-3 py-1 border border-gray-300 rounded-md shadow-sm text-gray-400 cursor-not-allowed flex items-center">
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      )}
    </section>
  );
};
export default Pagination;
