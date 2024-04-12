import { ReactNode } from 'react';
import { CSSObject } from 'styled-components';
import theme from '../../../shared/theme';

export type TTextVariants = keyof typeof theme.text.variants;

export interface TTextProps {
  variant?: TTextVariants;
  children: ReactNode;
  style?: CSSObject;
}
