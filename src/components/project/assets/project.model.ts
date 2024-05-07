import { TChipProps } from '../../../ui/chip/assets/chip.model.ts';

export type TChipLinkType = 'source' | 'docs' | 'default';

export interface TChipLink {
  label: string;
  href: string;
  type: TChipLinkType;
}

export interface TProjectProps {
  img: string;
  title: string;
  href: string;
  description: string;
  chips: TChipProps[];
  links: TChipLink[];
}
