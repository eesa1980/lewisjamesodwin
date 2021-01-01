import TitleEl from "../component/common/Title";
import React from "react";
import Layout from "../component/common/Layout";
import { route } from "../component/common/Routes";
import styled from "styled-components";

const Subtitle$ = styled.h2`
  text-align: center;
  font-variant-caps: all-small-caps;
  padding: 0;
  margin: 5px 0 0 0;
  font-weight: normal;
  letter-spacing: 2px;
`;

const Home = () => {
  return (
    <>
      <Layout
        links={{
          next: {
            url: route.social,
            title: "Social links",
          },
        }}
      >
        <TitleEl />
        <Subtitle$>Javascript Web Developer</Subtitle$>
      </Layout>
    </>
  );
};

export default Home;
