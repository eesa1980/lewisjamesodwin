import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { pallete } from "./../constant";
import Layout from "../component/common/Layout";
import { route } from "../component/common/Routes";

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 3em;
  text-align: center;

  @media screen and (min-width: 700px) {
    font-size: 4em;
  }
`;

const SocialLink = styled.a`
  margin: 0 10px;
  display: unset;
  transition: all 0.2s;

  :hover {
    color: ${pallete[4]};
  }
`;

const Social = () => {
  return (
    <Layout
      links={{
        prev: {
          url: route.home,
          title: "Home page",
        },
      }}
    >
      <SocialIcons>
        <SocialLink
          href={"https://www.linkedin.com/in/lewis-james-odwin-71b4a08a/"}
          target={"_blank"}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialLink>
        <SocialLink
          href={"https://twitter.com/ilikecoding4web"}
          target={"_blank"}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </SocialLink>
        <SocialLink href={"mailto:eesa1980@gmail.com"} target={"_blank"}>
          <FontAwesomeIcon icon={faEnvelope} />
        </SocialLink>
      </SocialIcons>
    </Layout>
  );
};

export default Social;
