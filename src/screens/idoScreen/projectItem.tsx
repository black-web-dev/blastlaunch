import React from 'react';

import DiscordIcon from '~/svg/discord.svg';
import BTLIcon from '~/svg/logo.svg';
import TelegramIcon from '~/svg/telegram.svg';
import TwitterIcon from '~/svg/twitter.svg';

const ProjectItem = ({ onClick }: { onClick: () => void }): JSX.Element => {
  return (
    <div
      className='cursor-pointer rounded-lg bg-white transition-all hover:scale-[1.02] hover:shadow-xl'
      onClick={onClick}
    >
      <div className="xs:bg-[image-set('/images/project-bg.jpg'_0.5x,'/images/project-bg.jpg'_1x,'/images/project-bg.jpg'_2x)] flex h-[252px] w-full items-center justify-center rounded-t-lg bg-cover bg-center bg-no-repeat">
        <div className='flex items-center gap-2'>
          <BTLIcon className='h-14 w-14' />
          <div className='flex flex-col'>
            <div className='text-2xl font-bold text-white'>Blastlaunch</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-6 px-6 py-3'>
        <div className='flex items-start justify-between'>
          <div className='flex items-center gap-2'>
            <BTLIcon className='h-10 w-10' />
            <div className='flex flex-col'>
              <div className='font-bold'>Blastlaunch</div>
            </div>
          </div>
          <div className='max-w-[250px] text-sm font-semibold'>
            A user driven IDO launchpad on Blast connecting retail investors and
            projects together.
          </div>
        </div>
        <div className='flex items-start justify-between'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <TwitterIcon className='h-6 w-6' />
              <DiscordIcon className='h-6 w-6' />
              <TelegramIcon className='h-6 w-6' />
            </div>
            <div className='rounded-lg bg-[#FC8E3E] px-2 py-1 text-center text-sm text-white'>
              Preparation
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='rounded-full bg-[#EFF8FD] px-4 py-1 text-center text-sm text-[#070D13]'>
              Launchpad
            </div>
            <div className='rounded-full bg-[#EFF8FD] px-4 py-1 text-center text-sm text-[#070D13]'>
              DeFi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
