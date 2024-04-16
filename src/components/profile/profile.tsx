import { FC } from 'react';
import Container from '../../ui/container/container';
import Text from '../../ui/text';
import Banner from '../banner';
import image from './assets/img/photo.png';
import { StyledProfilePicture } from './assets/profile.styles';
import Box from '../../ui/box/box.tsx';
import IconLink from '../../ui/icon-link';
import { SuitcaseIcon } from '../../ui/icons';

const Profile: FC = () => {
  return (
    <div>
      <Banner />
      <Container>
        <StyledProfilePicture>
          <img src={image} alt="Photo of Emilia" />
        </StyledProfilePicture>
        <Text variant={'h2'} as={'h1'} style={{ marginTop: '20px' }}>
          Emilia N
        </Text>
        <Text as={'h2'} variant={'h3'}>
          Web developer
        </Text>
        <Text style={{ marginTop: '10px' }}>
          <p>Passionate about clean code and delightful user experiences ✨</p>
          <p>
            Front-end developer. Back-end explorer. UX/UI enthusiast. Creative
            coder. Content creator.
          </p>
        </Text>
        <Box
          sx={() => ({
            display: 'flex',
          })}
        >
          <IconLink
            icon={<SuitcaseIcon />}
            label={'Available'}
            href={'javascript:void'}
          />
        </Box>
      </Container>
    </div>
  );
};

export default Profile;
