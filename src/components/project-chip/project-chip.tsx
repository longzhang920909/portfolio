import { FC } from 'react';
import { useTheme } from 'styled-components';
import Chip from '../../ui/chip';
import { TProjectChipProps } from './assets/project-chip.model.ts';

const ProjectChip: FC<TProjectChipProps> = ({ children, color }) => {
  const theme = useTheme();
  const ownColor = color ? theme.palette[color].main : undefined;
  return <Chip color={ownColor}>{children}</Chip>;
};

export default ProjectChip;
