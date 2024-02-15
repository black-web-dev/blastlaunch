import { Link } from './link';
import { Menu } from './menu';
import { Status } from './status';

import Logo from '~/svg/logo.svg';

export const Sidebar = (): JSX.Element => {
  return (
    <div className='sticky top-10 flex min-w-[250px] w-[250px] min-h-[calc(100vh_-_80px)] h-full flex-col gap-8 rounded-lg bg-white p-6'>
      <div className='flex items-center justify-center gap-2'>
        <Logo className='h-12 w-12' />
        <div className='text-2xl font-bold'>LastLaunch</div>
      </div>
      <Status />
      <Menu />
      <div className='flex-auto' />
      <Link />
    </div>
  );
};
