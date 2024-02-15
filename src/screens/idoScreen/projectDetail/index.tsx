import React from 'react';

import Detail from './detail';
import StatusBar from './statusBar';

import BTLIcon from '~/svg/logo.svg';

const ProjectDetail = ({
  selectedProject,
}: {
  selectedProject: string;
}): JSX.Element => {
  console.log(selectedProject);
  return (
    <div className='w-full rounded-lg bg-white'>
      <div className="xs:bg-[image-set('/images/project-bg.jpg'_0.5x,'/images/project-bg.jpg'_1x,'/images/project-bg.jpg'_2x)] flex h-[252px] w-full items-center justify-center rounded-t-lg bg-cover bg-center bg-no-repeat">
        <div className='flex  items-center gap-2'>
          <BTLIcon className='h-14 w-14' />
          <div className='flex flex-col'>
            <div className='text-2xl font-bold text-white'>Blastlaunch</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col-reverse lg:flex-row items-start gap-4 px-3 lg:px-6 py-3'>
        <div className='flex flex-auto flex-col gap-6'>
          <Detail />
        </div>
        <div className='flex lg:min-w-[300px] w-full lg:w-[300px] flex-col gap-2'>
          <StatusBar />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
