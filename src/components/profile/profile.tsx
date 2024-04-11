import {FC} from "react";
import Banner from "../banner";
import image from './assets/img/photo.png';
import {StyledProfilePicture} from "./assets/profile.styles";
import Container from "../../ui/container/container";

const Profile: FC = () => {
  return (
    <div>
      <Banner />
      <Container>
        <StyledProfilePicture>
          <img src={image} alt="Photo of Emilia" />
        </StyledProfilePicture>
      </Container>
    </div>
  )
}

export default Profile;