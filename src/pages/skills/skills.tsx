import { FC } from 'react';
import Container from '../../ui/container';
import IconChip from '../../ui/icon-chip';
import Text from '../../ui/text';
import { skillGroups } from './assets/data';
import {
  StyledChipBlock,
  StyledSkillGroup,
  StyledSkillsWrap,
} from './assets/skills.styles';

const Skills: FC = () => {
  return (
    <Container>
      <Text as={'h2'} variant={'h3'}>
        My skills & toolbox
      </Text>
      <StyledSkillsWrap>
        {skillGroups.map((group) => (
          <StyledSkillGroup>
            <Text>{group.title}</Text>
            <StyledChipBlock>
              {group.chips.map((chip) => (
                <IconChip
                  icon={chip.icon}
                  label={chip.label}
                  color={chip.color}
                />
              ))}
            </StyledChipBlock>
          </StyledSkillGroup>
        ))}
      </StyledSkillsWrap>
    </Container>
  );
};

export default Skills;
