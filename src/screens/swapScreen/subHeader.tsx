import Button from '@/components/common/button';

export const SwapSubHeader = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-2'>
        <Button>Swap</Button>
      </div>
      <div className='flex text-xs capitalize'>swap</div>
    </div>
  );
};
