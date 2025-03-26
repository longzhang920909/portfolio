import { ReactNode } from 'react';
import { TProjectChipProps } from '../../project-chip/assets/project-chip.model.ts';

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
  chips: TProjectChipProps[];
}
