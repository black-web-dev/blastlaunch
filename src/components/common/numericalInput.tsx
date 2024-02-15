import React from 'react';

import { classNames, escapeRegExp } from '../../utils';

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`); // match escaped "." characters via in a non-capturing group

export const NumericalInput = React.memo(function InnerInput({
  value,
  onChange,
  placeholder,
  className,
  ...rest
}: {
  value: string | number;
  onChange: (input: string | number) => void;
  error?: boolean | string;
  fontSize?: string;
  align?: 'left' | 'right';
  className?: string;
} & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) {
  const enforcer = (nextUserInput: string | number) => {
    if (
      nextUserInput === '' ||
      inputRegex.test(escapeRegExp(nextUserInput.toString()))
    ) {
      onChange(nextUserInput);
    }
  };

  return (
    <input
      className={classNames(
        'border-0 min-w-0 text-right bg-transparent p-0 text-2xl font-bold text-black w-full focus:outline-0 focus:ring-0 sm:leading-6',
        className
      )}
      {...rest}
      value={value}
      onChange={(event) => {
        enforcer(event.target.value.replace(/,/g, '.'));
      }}
      // universal input options
      inputMode='decimal'
      title='Token Amount'
      autoComplete='off'
      autoCorrect='off'
      type='text'
      pattern='^[0-9]*[.,]?[0-9]*$'
      placeholder={placeholder || '0.0'}
      minLength={1}
      maxLength={79}
      spellCheck='false'
    />
  );
});

export default NumericalInput;
