import { CSSObject, DefaultTheme } from 'styled-components';

export interface TBoxProps {
  sx?: (theme: DefaultTheme) => CSSObject;
  as?: keyof HTMLElementTagNameMap;
}
