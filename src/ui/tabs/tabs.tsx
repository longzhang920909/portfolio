import { FC } from 'react';
import { StyledTabsWrap } from './assets/tabs.styles';
import Text from '../text';
import { TTabsProps } from './assets/tabs.types.ts';
import TabButton from '../tab-button/tab-button.tsx';

const Tabs: FC<TTabsProps> = ({ sx }) => {
  return (
    <StyledTabsWrap sx={sx}>
      <TabButton isActive={true}>
        <Text>About</Text>
      </TabButton>
      <TabButton>
        <Text>Skills</Text>
      </TabButton>
      <TabButton>
        <Text>Projects</Text>
      </TabButton>
      <TabButton>
        <Text>Contact</Text>
      </TabButton>
    </StyledTabsWrap>
  );
};

export default Tabs;
