import React, { useRef, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import { pallete } from './constant';
import { TweenLite } from 'gsap/TweenLite';

const Wrapper = styled.div`
  width: auto;
  height: auto;
  max-height: calc(100vh - 80px);
  max-width: calc(100vw - 80px);
  position: absolute;
  color: ${pallete[5]};
  text-align: center;
`;

const Center = styled.div`
  width: auto;
  height: auto;
  color: ${pallete[5]};
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

const Back = styled.div`
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
`;

const Front = styled.div`
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
`;

const PageComp = ({ children, page, currentPage }) => {
  const center = useRef();
  const front = useRef();
  const back = useRef();
  const wrapper = useRef();

  const styleBack = {
    opacity: 0,
    transform: `translate(${-100}vw, ${100}vh)`
  };

  const styleFront = {
    opacity: 0,
    transform: `translate(${100}vw, ${-100}vh)`
  };

  const styleCenter = {
    opacity: 0,
    transform: `scale(0)`
  };

  const styleWrapper = {
    opacity: 0,
    zIndex: 1
  };

  useEffect(() => {
    if (page === currentPage) {
      TweenLite.to(back.current.style, 1, {
        opacity: 1,
        transform: `translate(${0}vw, ${0}vh)`
      });
      TweenLite.to(front.current.style, 1, {
        opacity: 1,
        transform: `translate(${0}vw, ${0}vh)`
      });
      TweenLite.to(wrapper.current.style, 1, {
        opacity: 1,
        zIndex: 1
      });
      TweenLite.to(center.current.style, 1, {
        opacity: 1,
        transform: `scale(1)`,
        zIndex: 1
      });
    } else {
      TweenLite.to(back.current.style, 1, {
        opacity: 0,
        transform: `translate(${-50}vw, ${50}vh)`
      });
      TweenLite.to(front.current.style, 1, {
        opacity: 0,
        transform: `translate(${100}vw, ${-100}vh)`
      });
      TweenLite.to(wrapper.current.style, 1, {
        opacity: 0,
        zIndex: 0
      });
      TweenLite.to(center.current.style, 1, {
        opacity: 0,
        transform: `scale(0)`,
        zIndex: 0
      });
    }
  }, [currentPage]);

  return (
    <Wrapper ref={wrapper} style={styleWrapper}>
      <Back style={styleBack} ref={back} />
      <Center ref={center} style={styleCenter}>
        {children}
      </Center>
      <Front ref={front} style={styleFront} />
    </Wrapper>
  );
};

export default PageComp;
