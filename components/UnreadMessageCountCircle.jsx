'use client';

import { useGlobalContext } from '@/context/GlobalContext';

const UnreadMessageCountCircle = () => {
  const { unreadMessageCount } = useGlobalContext();

  return (
    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-amber-300 rounded-full">
      {unreadMessageCount}
    </span>
  );
};

export default UnreadMessageCountCircle;
