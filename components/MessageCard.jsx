import React from 'react';

const MessageCard = ({ message }) => {
  return (
    <div className='relative bg-white p-4 rounded-md shadow-md border-gray-200'>
      <h2 className='text-xl mb-4'>
        <span className='font-bold'>Property Inquiry: </span>{' '}
        {message.property.name}
      </h2>
      <p className='text-gray-700'>{message.body}</p>
      <ul className='mt-4'>
        <li>
          <strong>Reply Email: </strong>{' '}
          <a href={`mailto:${message.email}`} className='text-blue-500'>
            {message.email}
          </a>
        </li>
        <li>
          <strong>Reply Phone: </strong>{' '}
          <a href={`tel:${message.phone}`} className='text-blue-500'>
            {message.phone}
          </a>
        </li>
        <li>
          <strong>Received: </strong>{' '}
          {new Date(message.createdAt).toLocaleString().split(' ')[0]} -{' '}
          {new Date(message.createdAt).toLocaleString().split(' ')[1]}
        </li>
      </ul>
    </div>
  );
};

export default MessageCard;
