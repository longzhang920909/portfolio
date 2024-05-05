import { FC } from 'react';
import Container from '../../ui/container';
import IconChip from '../../ui/icon-chip';
import JavascriptIcon from '../../ui/icons/javascript-icon.tsx';
import TypescriptIcon from '../../ui/icons/typescript-icon.tsx';
import Text from '../../ui/text';
import {
  StyledChipBlock,
  StyledSkillGroup,
  StyledSkillsWrap,
} from './assets/skills.styles.ts';

const skills = [
  {
    title: '> Programming languages',
    chips: [
      { icon: <JavascriptIcon />, label: 'JavaScript', color: '#F4DE26' },
      { icon: <TypescriptIcon />, label: 'TypeScript', color: '#397CC6' },
    ],
  },
  {
    title: '> Front end',
    chips: [],
  },
];

const Skills: FC = () => {
  return (
    <Container>
      <Text as={'h2'} variant={'h3'}>
        My skills & toolbox
      </Text>
      <StyledSkillsWrap>
        {skills.map((group) => (
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
