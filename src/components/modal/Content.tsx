import clsx from 'clsx';
import React, { FC, HTMLProps } from 'react';

export interface ModalContentProps {
  className?: string;
  children?: React.ReactNode;
}

const ModalContent: FC<ModalContentProps> = ({ children, className = '' }) => {
  return <div className={clsx('', className)}>{children}</div>;
};

export interface ModalContentBorderedProps extends HTMLProps<HTMLDivElement> {
  className?: string;
}

export const BorderedModalContent: FC<ModalContentBorderedProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={clsx(className, '')}>
      {children}
    </div>
  );
};

export default ModalContent;
