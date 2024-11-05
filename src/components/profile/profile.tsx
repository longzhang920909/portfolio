import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '../../ui/box/box';
import Container from '../../ui/container/container';
import { GithubIcon, SuitcaseIcon } from '../../ui/icons';
import InstagramIcon from '../../ui/icons/instagram-icon';
import Text from '../../ui/text';
import UiLink from '../../ui/ui-link';
import Banner from '../banner';
import NavigationTabs from '../navigation-tabs';
import image from './assets/img/photo.jpg';
import { StyledProfilePicture } from './assets/profile.styles';

const Profile: FC = () => {
  const location = useLocation();

  const [currentTab, setCurrentTab] = useState('about');

  useEffect(() => {
    const formattedPathname = location.pathname.replace(/\//, '');
    setCurrentTab(formattedPathname);
  }, [location.pathname]);

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
          <UiLink icon={<SuitcaseIcon />} label={'Available'} />
          <UiLink
            icon={<GithubIcon />}
            label={'Github'}
            href={'https://github.com/isemilia'}
          />
          <UiLink
            icon={<InstagramIcon />}
            label={'Instagram'}
            href={'https://www.instagram.com/emscript'}
          />
        </Box>
        <NavigationTabs
          currentValue={currentTab}
          // getValue={(tab) => setCurrentTab(tab.value as string)}
          tabs={[
            { label: 'About', value: 'about', href: '' },
            { label: 'Skills', value: 'skills', href: '/skills' },
            { label: 'Projects', value: 'projects', href: '/projects' },
            { label: 'Contact', value: 'contact', href: '/contact' },
          ]}
          sx={() => ({ marginTop: '40px' })}
        />
      </Container>
    </div>
  );
};

export default Profile;
