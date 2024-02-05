export const Status = () => {
  return (
    <div className='flex flex-col gap-2 rounded-lg bg-[#EFF8FD] p-4'>
      <div className='flex gap-1'>
        <div>Total raised:</div>
        <div className='font-semibold'>$780,000</div>
      </div>
      <div className='flex gap-1'>
        <div>Stakers:</div>
        <div className='font-semibold'>2,247</div>
      </div>
      <div className='flex gap-1'>
        <div>BTL Price:</div>
        <div className='font-semibold'>$0.01841</div>
      </div>
    </div>
  );
};
