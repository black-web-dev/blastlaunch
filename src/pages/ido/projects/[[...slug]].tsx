import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';

import { IBaseProps } from '@/components/base';

import ProjectScreen, {
  ProjectScreenProps,
} from '@/screens/idoScreen/projects';

export default ProjectScreen;

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<
  GetStaticPropsResult<ProjectScreenProps & IBaseProps>
> {
  const slug = (params?.slug as string[]) || [];

  return {
    props: {
      slug,
    },
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
