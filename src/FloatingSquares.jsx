import React from 'react';
import random from 'canvas-sketch-util/random';
import styled from 'styled-components';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { TweenLite } from 'gsap/TweenLite';
import { pallete } from './constant';

const CanvasWrapper = styled(Canvas)`
  height: 100vh !important;
  width: 100vw !important;
  position: absolute !important;

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

const FloatingSquares = ({ page }) => {
  random.setSeed(9);

  // The object of items on screen
  const items = amount => {
    const count = Math.pow(amount, 1 / 3);
    const points = [];

    for (let x = 0; x < count; x++) {
      if (points.length >= amount) {
        break;
      }
      for (let y = 0; y < count; y++) {
        for (let z = 0; z < count; z++) {
          const u = count <= 1 ? 0.5 : x / (count - 1);
          const v = count <= 1 ? 0.5 : y / (count - 1);
          const w = count <= 1 ? 0.5 : z / (count - 1);
          points.push([u, v, w]);
        }
      }
    }

    return points.map(([u, v, w], key) => ({
      key,
      position: [
        random.noise3D(u * 2, v, w, 2, 4),
        random.noise3D(u, v * 2, w, 2, 4),
        random.noise3D(u, v, w * 2, 2, 4)
      ],
      color: random.pick(pallete.slice(0, 4)),
      active: false,
      scale: [0.05, 0.05, 0.05],
      rotation: [0, 0, 0]
    }));
  };

  const Scene = () => {
    const { scene, camera } = useThree();

    useFrame(state => {
      TweenLite.fromTo(
        camera.position,
        1,
        { x: camera.position.x, y: camera.position.y },
        {
          x: state.mouse.x,
          y: state.mouse.y,
          z: Math.abs(state.mouse.x) + Math.abs(state.mouse.y) + 2
        }
      );

      scene.rotation.y += 0.001;
    });

    TweenLite.to(scene.rotation, 1, {
      x: (Math.PI / 2) * page,
      y: (Math.PI / 2) * -page
    });

    return (
      <group>
        {items(100).map((item, key) => (
          <MeshBox
            key={key}
            position={item.position}
            color={item.color}
            scale={item.scale}
            rotation={item.rotation}
          />
        ))}
      </group>
    );
  };

  // All the boxes
  const MeshBox = ({ position, scale, color, rotation }) => {
    return (
      <mesh
        visible
        position={position}
        receiveShadow={true}
        scale={scale}
        rotation={rotation}
      >
        <boxGeometry attach="geometry" args={[2, 2, 2]} />
        <meshBasicMaterial attach="material" color={color} />
      </mesh>
    );
  };

  return (
    <CanvasWrapper>
      <Scene />
    </CanvasWrapper>
  );
};

export default FloatingSquares;
