import React from "react";
import styled from "styled-components";
import Routes from "./component/common/Routes";
import FloatingSquares from "./floating-squares/FloatingSquares";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <>
      <FloatingSquares />
      <Main>
        <Routes />
      </Main>
    </>
  );
};

export default App;
