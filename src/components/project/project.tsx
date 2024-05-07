import { FC } from 'react';
import Box from '../../ui/box';
import Chip from '../../ui/chip';
import CodeIcon from '../../ui/icons/code-icon.tsx';
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

const Project: FC<TProjectProps> = () => {
  return (
    <StyledProjectWrap>
      <StyledProjectThumbnail>
        <img />
      </StyledProjectThumbnail>
      <Box>
        <StyledProjectTitle as={'h3'}>
          <span>Supported neglected meal</span> <ExternalLinkIcon />
        </StyledProjectTitle>
        <Text variant={'small'} sx={() => ({ marginTop: '8px' })}>
          Our side fail find like now. Discovered travelling for insensible
          partiality unpleasing impossible she.
        </Text>
        <StyledProjectChips>
          <Chip>Desktop only</Chip>
          <Chip>React</Chip>
        </StyledProjectChips>
        <StyledProjectLinks>
          <UiLink
            label={'Source'}
            href={''}
            size={'small'}
            icon={<CodeIcon />}
            iconPosition={'right'}
          />
        </StyledProjectLinks>
      </Box>
    </StyledProjectWrap>
  );
};

export default Project;
