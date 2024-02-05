import React, { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ModalActionsProps {
  children: React.ReactNode;
}

const ModalActions: FC<ModalActionsProps> = ({ children }) => {
  return <div className='flex items-center justify-end gap-4'>{children}</div>;
};

export default ModalActions;
