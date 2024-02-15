import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

import ProjectDetail from './projectDetail';
import ProjectItem from './projectItem';

export type ProjectScreenProps = {
  slug: string[];
};

const ProjectScreen = ({ slug }: ProjectScreenProps) => {
  const router = useRouter();

  const [selectedProject, setSelectedProject] = useState<string>('');

  const handleOpen = useCallback(
    (title: string) => {
      setSelectedProject(title);
      router.push({ pathname: `/ido/projects/${title}` }, undefined, {
        shallow: true,
      });
    },
    [router]
  );

  useEffect(() => {
    const sub = slug?.length > 0 ? slug[0] : '';

    selectedProject !== sub && setSelectedProject(sub);

    router.push({ pathname: sub }, undefined, { shallow: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (selectedProject)
    return <ProjectDetail selectedProject={selectedProject} />;

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 items-start gap-4'>
      <ProjectItem onClick={() => handleOpen('blastlaunch')} />
    </div>
  );
  1;
};

export default ProjectScreen;
