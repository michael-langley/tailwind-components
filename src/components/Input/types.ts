import type { HTMLAttributes } from 'astro/types';

export type LabelProps = {} & HTMLAttributes<'label'>;

export interface InputProps extends HTMLAttributes<'input'> {
  id: string;
  label: string;
  slotProps?: {
    label?: LabelProps;
  };
}
