import { ReactNode } from 'react';
import CodeIcon from '../../../../ui/icons/code-icon.tsx';
import DocsIcon from '../../../../ui/icons/docs-icon.tsx';
import ExternalLinkIcon from '../../../../ui/icons/external-link-icon.tsx';
import { TProjectLinkType } from '../../assets/project.model.ts';

const icons: { [key in TProjectLinkType]: ReactNode } = {
  source: <CodeIcon />,
  docs: <DocsIcon />,
  default: <ExternalLinkIcon size={12} />,
};

const getLinkIcon = (type: TProjectLinkType = 'default') => {
  return icons[type];
};

export default getLinkIcon;
