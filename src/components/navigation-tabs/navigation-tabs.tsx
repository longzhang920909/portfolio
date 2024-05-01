import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Box from '../../ui/box';
import TabButton from '../../ui/tab-button/tab-button.tsx';
import Text from '../../ui/text';
import { TTabsProps } from './assets/navigation-tabs.model.ts';
import { StyledTabsWrap } from './assets/navigation-tabs.styles.ts';

const StyledIndicator = styled(Box)(({ theme }) => ({
  height: '3px',
  background: theme.palette.primary.main,
  bottom: '-1px',
  position: 'absolute',
  transition: 'all .3s',
}));

const NavigationTabs: FC<TTabsProps> = ({
  sx,
  tabs,
  getValue,
  currentValue,
}) => {
  const [position, setPosition] = useState({ width: 0, left: 0 });

  const ref = useRef<HTMLDivElement>();

  const setIndicatorPosition = (target: HTMLDivElement | null) => {
    if (target) {
      const width = target.scrollWidth / 2;
      setPosition({
        width: width,
        left: target.offsetLeft + width / 2,
      });
    } else {
      setPosition({ width: 0, left: 0 });
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
        <NavLink key={tab.value} to={tab.href} style={{ all: 'unset' }}>
          <TabButton
            value={tab.value}
            handleClick={(e) => {
              handleClick(e);
              getValue && getValue(tab);
            }}
          >
            <Text>{tab.label}</Text>
          </TabButton>
        </NavLink>
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

export default NavigationTabs;
