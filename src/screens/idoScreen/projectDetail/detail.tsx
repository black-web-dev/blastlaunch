import React, { useState } from 'react';

import Description from './description';
import Info from './info';
import Participate from './participate';

const Detail = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  return (
    <>
      <Description />
      <div className='relative flex h-12 w-full items-center rounded-full bg-[#D1D5F6] p-[2px] font-semibold uppercase text-[#747FE4]'>
        <div
          className={
            'flex h-full cursor-pointer items-center justify-center py-3 text-center ' +
            (selectedTab === 0 ? 'w-[60%] rounded-full bg-white' : 'w-[40%]')
          }
          onClick={() => setSelectedTab(0)}
        >
          project infos
        </div>
        <div
          className={
            'flex h-full cursor-pointer items-center justify-center py-3 text-center ' +
            (selectedTab === 1 ? 'w-[60%] rounded-full bg-white' : 'w-[40%]')
          }
          onClick={() => setSelectedTab(1)}
        >
          participate
        </div>
      </div>
      {selectedTab === 0 ? <Info /> : <Participate />}
    </>
  );
};

export default Detail;
