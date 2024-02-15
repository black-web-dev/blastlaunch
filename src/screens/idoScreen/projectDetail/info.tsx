import React from 'react';

const Info = (): JSX.Element => {
  return (
    <>
      <div className='flex flex-col gap-3 rounded-lg bg-[#F6F6F6] p-4 text-sm font-bold'>
        <div className='flex items-center justify-between'>
          <div>Whitelist Starts</div>
          <div>Nov 9, 2022-2:00 PM UTC</div>
        </div>
        <div className='flex items-center justify-between'>
          <div>Whitelist Ends</div>
          <div>Nov 12, 2022-2:00 PM UTC</div>
        </div>
        <div className='flex items-center justify-between'>
          <div>Sale Starts</div>
          <div>Nov 12, 2022-4:00 PM UTC</div>
        </div>
        <div className='flex items-center justify-between'>
          <div>Distribution Starts</div>
          <div>Nov 16, 2022-2:00 PM UTC</div>
        </div>
        <div className='flex items-center justify-between'>
          <div>Chain Ticker</div>
          <div>BTL</div>
        </div>
      </div>
    </>
  );
};

export default Info;
