import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { pallete } from './constant';

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4em;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  margin: 10px;
  display: unset;
  transition: all 0.2s;

  :hover {
    color: ${pallete[4]};
  }
`;

const Social = () => {
  return (
    <SocialIcons>
      <SocialLink
        href={'https://www.linkedin.com/in/lewis-james-odwin-71b4a08a/'}
        target={'_blank'}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </SocialLink>
      <SocialLink
        href={'https://twitter.com/ilikecoding4web'}
        target={'_blank'}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </SocialLink>
      <SocialLink href={'mailto:eesa1980@gmail.com'} target={'_blank'}>
        <FontAwesomeIcon icon={faEnvelope} />
      </SocialLink>
    </SocialIcons>
  );
};

export default Social;
