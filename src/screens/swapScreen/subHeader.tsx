import Button from '@/components/common/button';

export const SwapSubHeader = () => {
  return (
    <div className='flex flex-col gap-2 w-full'>
      <div className='flex items-center gap-2'>
        <Button className='w-full lg:w-fit justify-center lg:justify-start'>Swap</Button>
      </div>
      <div className='flex text-xs capitalize'>swap</div>
    </div>
  );
};
