import React, { useState, useCallback, useRef, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import { pallete } from './constant';
import { TweenLite } from 'gsap/TweenLite';

const Page = styled.div`
  width: auto;
  height: auto;
  max-height: calc(100vh - 80px);
  max-width: 580px;
  /* margin: 0 40px; */
  position: absolute;
  color: ${pallete[5]};
  text-align: center;

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

const PageInner = styled.div`
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
`;

const PageComp = ({ children, onClick, page, currentPage }) => {
  const ref = useRef();

  const style = {
    opacity: 0,
    transform: `scale(${0})`,
    zIndex: 0
  };

  useEffect(() => {
    if (page === currentPage) {
      TweenLite.to(ref.current.style, 1, {
        opacity: 1,
        transform: `scale(${1})`,
        zIndex: 1
      });
    } else {
      TweenLite.to(ref.current.style, 1, {
        opacity: 0,
        transform: `scale(${0})`,
        zIndex: 0
      });
    }
  }, [currentPage, page, ref]);

  return (
    <Page onClick={onClick} ref={ref} style={style}>
      <PageInner>{children}</PageInner>
    </Page>
  );
};

export default PageComp;
