import React, {memo, useMemo} from 'react';
import random from 'canvas-sketch-util/random';
import styled from 'styled-components';
import {Canvas, useFrame, useThree} from 'react-three-fiber';
import gsap from 'gsap';
import {ItemsProcessor} from "./SquaresProcessor";
import MeshContainer from "./MeshContainer";

const Wrapper = styled(Canvas)`
  height: 100vh !important;
  width: 100vw !important;
  position: absolute !important;
  top: 0;
  left: 0;

  canvas {
    height: 100vh !important;
    width: 100vw !important;
    margin: auto;
    z-index: 0;
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Scene = ({page}) => {
    const {scene} = useThree();
    const ip = useMemo(() => new ItemsProcessor(100), []);

    useFrame(state => {
        gsap.to(
            scene.rotation,
            1,
            {
                y: state.mouse.x / 20,
                x: -state.mouse.y / 20,
            }
        );
    });

    return (
        <group>
            {ip.getItems().map((item, key) => {
                return <MeshContainer
                    index={key}
                    ip={ip}
                    key={key}
                    position={item.position}
                    color={item.color}
                    scale={item.scale}
                    rotation={item.rotation}
                />
            })}
        </group>
    );
};

const FloatingSquares = ({page}) => {
    const SceneMemo = memo(Scene);
    random.setSeed(4);

    return (
        <Wrapper>
            <SceneMemo page={page}/>
        </Wrapper>
    );
};

export default FloatingSquares;
