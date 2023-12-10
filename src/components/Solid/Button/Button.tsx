import type { JSX } from 'solid-js/jsx-runtime';
import { Button as KButton } from '@kobalte/core';
import clsx from 'clsx';
import { mergeProps, splitProps } from 'solid-js';

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

const Button = (props: Props) => {
  const merged = mergeProps({ variant: 'primary', size: 'medium' }, props);
  const [local, rest] = splitProps(props, ['children', 'class']);

  return (
    <KButton.Root
      class={clsx(
        'rounded-sm text-center border border-transparent disabled:cursor-not-allowed disabled:opacity-60 transition-colors duration-300 ease-in-out',
        {
          ['bg-primary-900 text-gray-100 focus:border-primary-700 focus-within:border-primary-700 hover:bg-primary-800']:
            merged.variant === 'primary',
          ['bg-secondary-600 text-gray-100 focus:border-secondary-500 focus-within:border-secondary-500 hover:bg-secondary-500']:
            merged.variant === 'secondary',
          ['bg-accent-700 text-gray-100 focus:border-accent-500 focus-within:border-accent-500 hover:bg-accent-600']:
            merged.variant === 'accent',
          ['bg-gray-200 text-gray-900 focus:border-gray-300 focus-within:border-gray-300 hover:bg-gray-300']:
            merged.variant === 'neutral',
          ['bg-transparent text-gray-900 border-gray-900 focus:border-gray-800 focus-within:border-gray-800 hover:border-gray-800']:
            merged.variant === 'outline',
          ['p-1 text-xs md:p-1.5 md:text-sm']: merged.size === 'small',
          ['p-1.5 text-base md:p-2 md:text-lg']: merged.size === 'medium',
          ['p-2.5 text-lg md:p-3 md:text-xl']: merged.size === 'large',
        },
        local.class,
      )}
      {...rest}
    >
      {local.children}
    </KButton.Root>
  );
};

export default Button;
