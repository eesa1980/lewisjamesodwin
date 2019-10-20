import React, { useState, useCallback } from 'react';
import './App.css';
import FloatingSquares from './FloatingSquares';
import Logo from './Logo';
import styled from 'styled-components';
import Layout from './Layout';

const Main = styled.main`
  margin: auto;
  position: relative;
  cursor: pointer;
`;

const LogoClick = styled(Logo)`
  cursor: pointer;
`;

const App = () => {
  const [page, setPage] = useState(0);

  const onClickLogo = () => void setPage(page + 1);

  return (
    <Layout>
      <FloatingSquares page={page} />
      <Main>
        <LogoClick onClick={useCallback(onClickLogo, [page])} />
      </Main>
    </Layout>
  );
};

export default App;
