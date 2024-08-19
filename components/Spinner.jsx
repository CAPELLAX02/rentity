'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading, size, customCssOverride }) => {
  return (
    <ClipLoader
      color='#3b82f6'
      loading={loading}
      cssOverride={customCssOverride || override}
      size={size || 150}
      aria-label='Loading Spinner'
    />
  );
};
export default Spinner;
