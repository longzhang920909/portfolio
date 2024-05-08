import { FC } from 'react';
import Box from '../../ui/box';
import Chip from '../../ui/chip';
import ExternalLinkIcon from '../../ui/icons/external-link-icon.tsx';
import Text from '../../ui/text';
import UiLink from '../../ui/ui-link';
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
          <a href={href}>{title}</a> <ExternalLinkIcon />
        </StyledProjectTitle>
        <Text variant={'small'} sx={() => ({ marginTop: '8px' })}>
          {description}
        </Text>
        <StyledProjectChips>
          {chips.map(({ children, ...props }, i) => (
            <Chip key={i} {...props}>
              {children}
            </Chip>
          ))}
        </StyledProjectChips>
        <StyledProjectLinks>
          {links.map((link, i) => (
            <UiLink
              key={i}
              label={link.label}
              href={link.href}
              icon={getLinkIcon(link.type)}
              size={'small'}
              iconPosition={'right'}
            />
          ))}
        </StyledProjectLinks>
      </Box>
    </StyledProjectWrap>
  );
};

export default Project;
