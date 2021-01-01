import React, { useRef, useEffect } from "react";
import "../../App.css";
import styled from "styled-components";
import { pallete } from "../../constant";
import gsap, { Power2 } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import useRouteUpdater from "../../hooks/useRouterUpdater";

const Layout$ = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;

  &:hover {
    cursor: initial;
  }
`;

const NavLink$ = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  z-index: 2;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1) !important;
  }

  :before {
    position: absolute;
    content: "";
    height: 36px;
    border: 2px solid ${pallete[1]};
    z-index: 2;
  }

  &.top {
    top: -80px;
    background: ${pallete[3]};

    &:before {
      top: 40px;
    }
  }

  &.bottom {
    bottom: -80px;
    background: ${pallete[4]};

    &:before {
      bottom: 40px;
    }
  }
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
  z-index: 3;
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

const Layout = ({ children, links }) => {
  const center = useRef();
  const front = useRef();
  const back = useRef();
  const prev = useRef();
  const next = useRef();

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

  const stylePrev = {
    opacity: 0,
    transform: `translateY(40px)`,
  };

  const styleNext = {
    opacity: 0,
    transform: `translateY(-40px)`,
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

    const prevNextStyle = {
      duration: 0.25,
      opacity: 1,
      transform: `translateY(0)`,
    };

    if (prev && prev.current) {
      tl.to(prev.current.style, prevNextStyle);
    }

    if (next && next.current) {
      tl.to(next.current.style, prevNextStyle);
    }
  }, []);

  const routeUpdater = useRouteUpdater();

  return (
    <Layout$>
      {links && links.prev && (
        <NavLink$
          style={stylePrev}
          ref={prev}
          className={"top"}
          onClick={() => routeUpdater(links.prev.url)}
          title={links.prev.title}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </NavLink$>
      )}

      <Back style={styleBack} ref={back} />
      <Center ref={center} style={styleCenter}>
        {children}
      </Center>
      <Front ref={front} style={styleFront} />

      {links && links.next && (
        <NavLink$
          style={styleNext}
          ref={next}
          className={"bottom"}
          onClick={() => routeUpdater(links.next.url)}
          title={links.next.title}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </NavLink$>
      )}
    </Layout$>
  );
};

export default Layout;
