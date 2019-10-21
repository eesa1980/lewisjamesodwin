import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 0 0 10px;
  padding: 0;
`;

const TitleMain = styled.h1`
  margin: inherit;
  padding: inherit;
  font-size: 1.25em;
  font-variant-caps: all-small-caps;
`;

const TitleSub = styled.h2`
  margin: inherit;
  padding: inherit;
  font-size: 0.5em;
  font-style: italic;
  max-width: calc(100% - 40px);
  margin: auto;
`;

const Bold = styled.span`
  font-weight: 900;
`;

const Light = styled.span`
  font-weight: 100;
`;

const TitleEl = () => {
  return (
    <>
      <Title className={'title'}>
        <TitleMain>
          <Bold>Lewis</Bold>
          <Light>JamesOdwin</Light>
        </TitleMain>
        <TitleSub>
          <Light>
            #WebDeveloper #JavaScript #TypeScript #Web #Reactjs #Node
          </Light>
        </TitleSub>
      </Title>
    </>
  );
};

export default TitleEl;
