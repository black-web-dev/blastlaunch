import React, { useEffect, useState } from 'react';

import Logo from '~/svg/logo.svg';

const WithLoading = (Component: any) => {
  return function WithLoadingComponent({ ...props }) {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1.5 * 1000);

      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return (
        <div className='flex h-screen w-full items-center justify-center'>
          <div className='flex items-center justify-center gap-2'>
            <Logo className='h-12 w-12' />
            <div className='text-2xl font-bold'>LastLaunch</div>
          </div>
        </div>
      );
    } else {
      return <Component {...props} />;
    }
  };
};

export default WithLoading;
