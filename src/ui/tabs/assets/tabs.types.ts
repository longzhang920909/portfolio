import { TBoxProps } from '../../box/assets/box.types.ts';

export type TTab = { label: string; value: string | number };

export interface TTabsProps {
  sx?: TBoxProps['sx'];
  getValue?: (tab: TTab) => void;
  tabs: TTab[];
  currentValue?: TTab['value'];
}
