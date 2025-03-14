import { FC } from 'react';
import Container from '../../ui/container';
import { GithubIcon } from '../../ui/icons';
import EmailIcon from '../../ui/icons/email-icon.tsx';
import Text from '../../ui/text';
import UiLink from '../../ui/ui-link';
import {
  StyledContactBlock,
  StyledContactLinks,
} from './assets/contact.styles.ts';

const Contact: FC = () => {
  return (
    <Container>
      <Text variant={'h3'} as={'h2'}>
        Let's connect
      </Text>
      <StyledContactBlock>
        <Text>
          <p>Find me on these social platforms:</p>
        </Text>
        <StyledContactLinks>
          <UiLink
            href={'https://github.com/isemilia'}
            label={'isemilia'}
            icon={<GithubIcon />}
            target={'_blank'}
          />
          <UiLink
            href={'https://bsky.app/profile/emiliasonder.bsky.social'}
            label={'emiliasonder.bsky.social'}
            target={'_blank'}
          />
        </StyledContactLinks>
      </StyledContactBlock>
      <StyledContactBlock>
        <Text>
          <p>Or simply drop me an email:</p>
        </Text>
        <StyledContactLinks>
          <UiLink
            href={'mailto:emiliaoffice@yandex.com'}
            label={'emiliaoffice@yandex.com'}
            icon={<EmailIcon />}
          />
        </StyledContactLinks>
      </StyledContactBlock>
      <StyledContactBlock>
        <Text>
          <p>
            Feel free to explore my work and connect with me. Whether you have
            questions, collaboration ideas, or just want to say hello, I'm
            always here. Let's create something amazing together :)
          </p>
        </Text>
      </StyledContactBlock>
    </Container>
  );
};

export default Contact;
