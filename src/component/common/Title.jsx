import React from "react";
import styled from "styled-components";

const TitleMain = styled.h1`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-size: 2.3em;
  text-align: center;

  @media screen and (min-width: 700px) {
    font-size: 2.7em;
  }
`;

const Bold = styled.span`
  font-weight: 900;
  display: block;

  @media screen and (min-width: 500px) {
    display: inline-block;
  }
`;

const Light = styled.span`
  font-weight: 100;
  display: block;

  @media screen and (min-width: 500px) {
    display: inline-block;
  }
`;

const Title = () => (
  <TitleMain>
    <Bold>Lewis</Bold>
    <Light>James</Light>
    <Light>Odwin</Light>
  </TitleMain>
);

export default Title;
