import { ReactNode } from 'react';

export type TButtonVariants = 'primary' | 'secondary';

export interface TButtonProps {
  children?: ReactNode;
  variant?: TButtonVariants;
}
