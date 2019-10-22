import React, { useState, useCallback } from 'react';
import './App.css';
import FloatingSquares from './FloatingSquares';
import Logo from './Logo';
import styled from 'styled-components';
import Layout from './Layout';
import Social from './Social';
import Page from './Page';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 1;
`;

const App = () => {
  const [page, setPage] = useState(1);
  const pageCount = 2;

  const incrementPage = useCallback(
    () => void setPage(page >= pageCount ? 1 : page + 1),
    [page]
  );

  return (
    <Layout>
      <FloatingSquares page={page} />
      <Main>
        <LogoWrapper onClick={incrementPage}>
          <Logo currentPage={page} page={1} />
        </LogoWrapper>

        <Page onClick={incrementPage} currentPage={page} page={2}>
          <Social />
        </Page>
      </Main>
    </Layout>
  );
};

export default App;
