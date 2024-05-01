import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '../../ui/box';
import Text from '../../ui/text';
import { StyledUiLink } from '../../ui/ui-link/assets/ui-link.styles.ts';
import { StyledFooterWrap } from './assets/footer.styles.ts';

const Footer: FC = () => {
  return (
    <StyledFooterWrap>
      <Text>Emilia N © 2024</Text>
      <Box
        sx={() => ({
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        })}
      >
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
      </Box>
    </StyledFooterWrap>
  );
};

export default Footer;
