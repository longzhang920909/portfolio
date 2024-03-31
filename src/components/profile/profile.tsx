import {FC} from "react";
import Banner from "../banner";
import image from './resources/img/photo.png';
import {StyledProfilePicture} from "./resources/styles.ts";
import Container from "../../shared/styles/container.ts";

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