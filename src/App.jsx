import React, { useState, useCallback, Fragment, useEffect } from 'react';
import './App.css';
import FloatingSquares from './FloatingSquares';
import Logo from './Logo';
import styled from 'styled-components';
import Layout from './Layout';
import { pallete } from './constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Title from './Title';
import { useTransition, animated } from 'react-spring';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const TransitionWrapper = styled(animated.div)`
  /* position: absolute; */
`;

const LogoClick = styled(Logo)`
  cursor: pointer;
`;

const Page = styled.div`
  width: auto;
  height: auto;
  max-height: calc(100vh - 80px);
  max-width: 580px;
  margin: 0 40px;
  position: relative;
  color: ${pallete[5]};
  text-align: center;

  > section {
    background: ${pallete[1]};
    height: inherit;
    max-height: inherit;
    max-width: inherit;
    min-height: 100%;
    min-width: 100%;
    padding: 20px;
    position: relative;
    width: inherit;
    z-index: 1;
  }

  :before {
    content: '';
    background: ${pallete[3]};
    bottom: -20px;
    height: inherit;
    left: -20px;
    max-height: inherit;
    max-width: inherit;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    width: inherit;
  }

  :after {
    content: '';
    background: ${pallete[4]};
    height: inherit;
    max-height: inherit;
    max-width: inherit;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    right: -20px;
    top: -20px;
    width: inherit;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
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

const App = () => {
  const [page, setPage] = useState(1);
  const pageCount = 2;

  const incrementPage = useCallback(
    () => void setPage(page >= pageCount ? 1 : page + 1),
    [page]
  );

  const transitions = useTransition(page, null, {
    from: {
      transform: 'translateY(-50vh)',
      position: 'absolute',
      opacity: 0
    },
    enter: { opacity: 1, position: 'absolute', transform: 'translateY(0)' },
    leave: { opacity: 0, position: 'absolute', transform: 'translateY(50vh)' }
  });

  return (
    <Layout>
      <FloatingSquares page={page} />
      <Main>
        {transitions.map(({ item, key, props }) =>
          item === 1 ? (
            <TransitionWrapper style={props} key={key}>
              <LogoClick onClick={incrementPage} />
            </TransitionWrapper>
          ) : item === 2 ? (
            <TransitionWrapper style={props} key={key}>
              <Page onClick={incrementPage}>
                <section>
                  <Title />
                  <a href={'mailto:eesa1980@gmail.com'}>eesa1980@gmail.com</a>
                  <SocialIcons>
                    <SocialLink
                      href={
                        'https://www.linkedin.com/in/lewis-james-odwin-71b4a08a/'
                      }
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
                  </SocialIcons>
                </section>
              </Page>
            </TransitionWrapper>
          ) : (
            <Fragment />
          )
        )}
      </Main>
    </Layout>
  );
};

export default App;
