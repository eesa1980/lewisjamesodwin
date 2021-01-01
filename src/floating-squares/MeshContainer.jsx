import React, {  useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import random from "canvas-sketch-util/random";
import { useFrame } from "react-three-fiber";

const MeshContainer = ({
  ip,
  index,
  position,
  scale,
  color,
  rotation,
}) => {
  const mesh = useRef();
  const angle = Math.random() * Math.PI * 2;
  const item = useMemo(() => ip.getItems()[index], [index, ip]);

  useEffect(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline({ repeat: -1 });

    const [x, y, z] = item.position;

    tl.to(mesh.current.scale, {
      duration: 0.25,
      z: 3,
    });

    tl.to(mesh.current.scale, {
      duration: 0.45,
      z: item.scale[2],
    });

    tl2.to(mesh.current.position, {
      duration: 30,
      z: random.noise3D(x, y, z * 2, 2, 4),
    });

    tl2.to(mesh.current.position, {
      duration: 30,
      z,
    });
  }, [item.position, item.scale]);

  useFrame((state) => {
    const [x, y] = item.position;
    const tl = gsap.timeline();

    const itemNotNearCentre =
      Math.abs(state.mouse.x) > 0.1 && Math.abs(state.mouse.y) > 0.1;

    const itemCloseToCursor =
      Math.abs(state.mouse.x - x) < 0.5 || Math.abs(state.mouse.y - y) < 0.5;

    if (itemNotNearCentre) {
      if (itemCloseToCursor) {
        tl.to(mesh.current.position, {
          duration: 10,
          x: state.mouse.x * 4 + Math.cos(angle) * 2,
          y: state.mouse.y * 4 + Math.sin(angle) * 2,
        });
      } else {
        tl.to(mesh.current.position, {
          duration: 10,
          x,
          y,
        });
      }
    }
  });

  return (
    <mesh
      ref={mesh}
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

export default MeshContainer;
