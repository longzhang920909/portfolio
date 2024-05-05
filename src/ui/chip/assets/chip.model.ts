import { MouseEvent } from 'react';
import { TBoxProps } from '../../box/assets/box.model.ts';

export interface TChipProps {
  color?: string;
  children?: string;
  size?: 'small' | 'medium';
  variant?: 'filled' | 'outlined';
  sx?: TBoxProps['sx'];
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}
