import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Text from '../../ui/text';
import { StyledUiLink } from '../../ui/ui-link/assets/ui-link.styles.ts';
import { StyledFooterMenu, StyledFooterWrap } from './assets/footer.styles.ts';

const Footer: FC = () => {
  return (
    <StyledFooterWrap>
      <Text className={'footer-copyright'}>Emilia N © 2024</Text>
      <StyledFooterMenu>
        <StyledUiLink as={NavLink} to={'/'}>
          About
        </StyledUiLink>
        <StyledUiLink as={NavLink} to={'/skills'}>
          Skills
        </StyledUiLink>
        <StyledUiLink as={NavLink} to={'/projects'}>
          Projects
        </StyledUiLink>
        <StyledUiLink as={NavLink} to={'/contact'}>
          Contact
        </StyledUiLink>
      </StyledFooterMenu>
    </StyledFooterWrap>
  );
};

export default Footer;
