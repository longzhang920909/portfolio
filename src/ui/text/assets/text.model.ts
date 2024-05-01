import { ReactNode } from 'react';
import theme from '../../../shared/theme';
import { TBoxProps } from '../../box/assets/box.model.ts';

export type TTextVariants = keyof typeof theme.text.variants.default;

export interface TTextProps {
  variant?: TTextVariants;
  children: ReactNode;
  sx?: TBoxProps['sx'];
  as?: TBoxProps['as'];
  className?: string;
}
