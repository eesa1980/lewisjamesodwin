import React, { useState, useCallback, useRef } from 'react';
import './App.css';
import FloatingSquares from './FloatingSquares';
import Layout from './Layout';
import Page from './Page';
import Social from './Social';
import TitleEl from './Title';
import debounce from 'lodash/debounce';
import styled from 'styled-components';
import { Swipeable } from 'react-swipeable';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const layout = useRef();
  const swipeable = useRef();

  const [page, setPage] = useState(1);
  const pageCount = 2;

  const incrementPage = useCallback(
    () => void setPage(page >= pageCount ? 1 : page + 1),
    [page]
  );

  const decrementPage = useCallback(
    () => void setPage(page <= pageCount ? 1 : page - 1),
    [page]
  );

  const onWheelHandler = useCallback(
    event => {
      event.deltaY < 0 ? decrementPage() : incrementPage();
    },
    [layout, swipeable]
  );

  const wheelDebounced = debounce(onWheelHandler, 250, {
    leading: true,
    trailing: false,
    maxWait: 1000
  });

  return (
    <Swipeable ref={swipeable} onSwiped={wheelDebounced}>
      <div ref={layout} onWheel={wheelDebounced}>
        <Layout>
          <FloatingSquares page={page} />
          <Main>
            <Page currentPage={page} page={1}>
              <TitleEl />
            </Page>
            <Page currentPage={page} page={2}>
              <Social />
            </Page>
          </Main>
        </Layout>
      </div>
    </Swipeable>
  );
};

export default App;
