import React, { useRef, useEffect } from "react";
import "../../App.css";
import styled from "styled-components";
import { pallete } from "../../constant";
import gsap, { Power2 } from "gsap";

const Layout$ = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const Center = styled.div`
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
  opacity: 0;
`;

const Back = styled.div`
  content: "";
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
  opacity: 0;
  transform: translate(${-100}vw, ${100}vh);
`;

const Front = styled.div`
  content: "";
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
  opacity: 0;
`;

const Layout = ({ children }) => {
  const center = useRef();
  const front = useRef();
  const back = useRef();

  const styleBack = {
    opacity: 0,
    transform: `translate(${-100}vw, ${100}vh)`,
  };

  const styleFront = {
    opacity: 0,
    transform: `translate(${100}vw, ${-100}vh)`,
  };

  const styleCenter = {
    opacity: 0,
    transform: `scale(0)`,
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(back.current.style, {
      duration: 0.25,
      opacity: 1,
      transform: `translate(${0}vw, ${0}vh)`,
      ease: Power2.easeInOut,
    });

    tl.to(front.current.style, {
      duration: 0.25,
      opacity: 1,
      transform: `translate(${0}vw, ${0}vh)`,
      ease: Power2.easeInOut,
    });

    tl.to(center.current.style, {
      duration: 0.25,
      opacity: 1,
      transform: `scale(1)`,
      ease: Power2.easeInOut,
    });
  }, []);

  return (
    <Layout$>
      <Back style={styleBack} ref={back} />
      <Center ref={center} style={styleCenter}>
        {children}
      </Center>
      <Front ref={front} style={styleFront} />
    </Layout$>
  );
};

export default Layout;
