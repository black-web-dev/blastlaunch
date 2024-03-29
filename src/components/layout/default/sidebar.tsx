import { Link } from './link';
import { Menu } from './menu';
import { Status } from './status';

import Logo from '~/svg/logo.svg';

export const Sidebar = (): JSX.Element => {
  return (
    <div className='sticky top-10 hidden h-full min-h-[calc(100vh_-_80px)] w-[250px] min-w-[250px] flex-col gap-8 rounded-lg bg-white p-6 lg:flex'>
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
