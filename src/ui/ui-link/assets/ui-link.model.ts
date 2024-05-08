import { ReactNode } from 'react';
import { TBoxProps } from '../../box/assets/box.model.ts';

interface TAnyProps {
  [key: string]: any;
}

export interface TUiLinkProps extends TAnyProps {
  icon?: ReactNode;
  label: string;
  href?: string;
  size?: 'medium' | 'small';
  iconPosition?: 'right' | 'left';
  as?: TBoxProps['as'];
}
