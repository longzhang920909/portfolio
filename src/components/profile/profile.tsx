import { FC } from 'react';
import Container from '../../ui/container/container';
import Text from '../../ui/text';
import Banner from '../banner';
import image from './assets/img/photo.png';
import { StyledProfilePicture } from './assets/profile.styles';
import Box from '../../ui/box/box.tsx';
import IconLink from '../../ui/icon-link';
import { GithubIcon, SuitcaseIcon } from '../../ui/icons';
import InstagramIcon from '../../ui/icons/instagram-icon.tsx';

const Profile: FC = () => {
  return (
    <div>
      <Banner />
      <Container>
        <StyledProfilePicture>
          <img src={image} alt="Photo of Emilia" />
        </StyledProfilePicture>
        <Text variant={'h2'} as={'h1'} sx={() => ({ marginTop: '20px' })}>
          Emilia N
        </Text>
        <Text as={'h2'} variant={'h3'}>
          Web developer
        </Text>
        <Text sx={() => ({ marginTop: '10px' })}>
          <p>Passionate about clean code and delightful user experiences ✨</p>
          <p>
            Front-end developer. Back-end explorer. UX/UI enthusiast. Creative
            coder. Content creator.
          </p>
        </Text>
        <Box
          sx={() => ({
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          })}
        >
          <IconLink
            icon={<SuitcaseIcon />}
            label={'Available'}
            href={'javascript:void'}
          />
          <IconLink
            icon={<GithubIcon />}
            label={'Github'}
            href={'javascript:void'}
          />
          <IconLink
            icon={<InstagramIcon />}
            label={'Instagram'}
            href={'javascript:void'}
          />
        </Box>
      </Container>
    </div>
  );
};

export default Profile;
