import { ReactNode } from 'react';
import { TChipProps } from '../../../ui/chip/assets/chip.model.ts';

export type TProjectLinkType = 'source' | 'docs' | 'default';

export interface TProjectLink {
  label: string;
  href: string;
  type?: TProjectLinkType;
}

export interface TProjectProps {
  img: string;
  title: string;
  href: string;
  description: ReactNode;
  chips: TChipProps[];
  links: TProjectLink[];
}
