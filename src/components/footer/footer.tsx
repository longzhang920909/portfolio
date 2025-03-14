import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Text from '../../ui/text';
import UiLink from '../../ui/ui-link';
import { StyledFooterMenu, StyledFooterWrap } from './assets/footer.styles.ts';

const Footer: FC = () => {
  return (
    <StyledFooterWrap>
      <Text className={'footer-copyright'}>Emilia Sonder © 2024-2025</Text>
      <StyledFooterMenu>
        <UiLink as={NavLink} to={'/'} label={'About'} />
        <UiLink as={NavLink} to={'/skills'} label={'Skills'} />
        <UiLink as={NavLink} to={'/projects'} label={'Projects'} />
        <UiLink as={NavLink} to={'/contact'} label={'Contact'} />
      </StyledFooterMenu>
    </StyledFooterWrap>
  );
};

export default Footer;
