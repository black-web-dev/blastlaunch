import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';

import Loader from './loader';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  icon?: React.ReactNode;
  loading?: boolean;
}

const VARIANTYPE = {
  fill: 'text-[#070D13] bg-[#FBE460] hover:bg-[#FBE460]/50 active:scale-95',
  outline:
    'text-[#070D13] bg-white border border-[#070D13] hover:bg-[#FBE460]/50 active:scale-95',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'fill', icon, children, className = '', loading, ...rest },
    ref
  ) => {
    function createRipple(event: React.MouseEvent) {
      const button: any = event.currentTarget;

      const circle = document.createElement('span');
      circle.style.position = 'absolute';
      circle.style.borderRadius = '50%';
      circle.style.backgroundColor = '#4ea7ff26';
      circle.style.transform = 'scale(0)';
      circle.classList.add('animate-ripple'); //tailwindcss config

      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
      circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
      circle.classList.add('ripple');

      const ripple = button.getElementsByClassName('ripple')[0];

      if (ripple) {
        ripple.remove();
      }

      button.appendChild(circle);
    }

    return (
      <button
        ref={ref}
        className={clsx(
          'relative flex min-h-[42px] whitespace-nowrap items-center justify-start gap-2 overflow-hidden rounded-lg px-4 py-1.5 text-sm font-bold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
          rest.disabled && 'cursor-not-allowed bg-[#CED8DF] text-[#4B5A67]',
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore TYPE NEEDS FIXING
          VARIANTYPE[variant],
          className
        )}
        {...rest}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          createRipple(e);
          rest.onClick && rest.onClick(e);
        }}
      >
        {icon && icon}
        {children}
        {!!loading && (
          <div className='absolute right-2'>
            <Loader />
          </div>
        )}
      </button>
    );
  }
);

export default Button;
