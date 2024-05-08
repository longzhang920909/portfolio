import { ReactNode } from 'react';

export interface TUiLinkProps {
  icon?: ReactNode;
  label: string;
  href: string;
  size?: 'medium' | 'small';
  iconPosition?: 'right' | 'left';
}
