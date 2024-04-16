import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { StyledTabsWrap } from './assets/tabs.styles';
import Text from '../text';
import { TTabsProps } from './assets/tabs.types.ts';
import TabButton from '../tab-button/tab-button.tsx';
import styled from 'styled-components';
import Box from '../box';

const StyledIndicator = styled(Box)(({ theme }) => ({
  height: '3px',
  background: theme.palette.primary.main,
  bottom: '-1px',
  position: 'absolute',
  transition: 'all .3s',
}));

const Tabs: FC<TTabsProps> = ({ sx, tabs, getValue, currentValue }) => {
  const [position, setPosition] = useState({ width: 0, left: 0 });

  const ref = useRef<HTMLDivElement>();

  const setIndicatorPosition = (target: HTMLDivElement | null) => {
    if (target) {
      const width = target.scrollWidth / 2;
      setPosition({
        width: width,
        left: target.offsetLeft + width / 2,
      });
    }
  };

  const handleClick = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    setIndicatorPosition(target);
  };

  useEffect(() => {
    if (ref.current) {
      const current: HTMLDivElement | null = ref.current.querySelector(
        '.tabs-button' + (currentValue ? `#${currentValue}` : ''),
      );
      setIndicatorPosition(current);
    }
  }, [currentValue]);

  return (
    <StyledTabsWrap ref={ref} sx={sx}>
      {tabs.map((tab) => (
        <TabButton
          key={tab.value}
          value={tab.value}
          handleClick={(e) => {
            handleClick(e);
            getValue && getValue(tab);
          }}
        >
          <Text>{tab.label}</Text>
        </TabButton>
      ))}
      <StyledIndicator
        sx={() => ({
          width: position.width,
          left: position.left,
        })}
      />
    </StyledTabsWrap>
  );
};

export default Tabs;
