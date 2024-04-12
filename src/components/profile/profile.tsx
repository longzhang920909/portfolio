import { FC } from 'react';
import Container from '../../ui/container/container';
import Text from '../../ui/text';
import Banner from '../banner';
import image from './assets/img/photo.png';
import { StyledProfilePicture } from './assets/profile.styles';

const Profile: FC = () => {
  return (
    <div>
      <Banner />
      <Container>
        <StyledProfilePicture>
          <img src={image} alt="Photo of Emilia" />
        </StyledProfilePicture>
        <Text variant={'h2'} style={{ marginTop: '20px' }}>
          Emilia N
        </Text>
      </Container>
    </div>
  );
};

export default Profile;
