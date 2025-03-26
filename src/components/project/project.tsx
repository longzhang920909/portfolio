import { FC } from 'react';
import Box from '../../ui/box';
import ExternalLinkIcon from '../../ui/icons/external-link-icon.tsx';
import Text from '../../ui/text';
import UiLink from '../../ui/ui-link';
import ProjectChip from '../project-chip';
import { TProjectProps } from './assets/project.model.ts';
import {
  StyledProjectChips,
  StyledProjectLinks,
  StyledProjectThumbnail,
  StyledProjectTitle,
  StyledProjectWrap,
} from './assets/project.styles';
import getLinkIcon from './utils/get-link-icon';

const Project: FC<TProjectProps> = ({
  img,
  href,
  title,
  description,
  chips = [],
  links = [],
}) => {
  return (
    <StyledProjectWrap>
      <StyledProjectThumbnail>
        <img alt={title} src={img} />
      </StyledProjectThumbnail>
      <Box>
        <StyledProjectTitle as={'h3'}>
          <a href={href} target={'_blank'}>
            {title}
          </a>{' '}
          <ExternalLinkIcon />
        </StyledProjectTitle>
        <Text variant={'small'} sx={() => ({ marginTop: '4px' })}>
          {description}
        </Text>
        <StyledProjectChips>
          {chips.map(({ children, ...props }, i) => (
            <ProjectChip key={i} {...props}>
              {children}
            </ProjectChip>
          ))}
        </StyledProjectChips>
      </Box>
    </StyledProjectWrap>
  );
};

export default Project;
