import React, {useCallback, useEffect, useMemo, useRef} from "react";
import gsap from "gsap";
import random from "canvas-sketch-util/random";
import {useFrame} from "react-three-fiber";

const MeshContainer = ({ip, index, position, scale, color, rotation}) => {
    const mesh = useRef();
    const angle = Math.random() * Math.PI * 2;
    const [x, y, z] = useMemo(() => ip.getItems()[index].position, []);
    const tweenFx = useCallback((vars, dur = 10) => {
        gsap.to(
            mesh.current.position,
            dur,
            {
                ...vars,
            }
        );
    }, []);


    useEffect(() => {
        tweenFx({
            z: random.noise3D(x, y, random.value(), 2, 4),
        })
    }, [])


    useFrame((state) => {
        const itemNotNearCentre = (Math.abs(state.mouse.x) > 0.1 && Math.abs(state.mouse.y) > 0.1);
        const itemCloseToCursor = (Math.abs(state.mouse.x - x) < .5 || Math.abs(state.mouse.y - y) < .5);

        if (itemNotNearCentre) {
            if (itemCloseToCursor) {
                tweenFx( {
                    x: state.mouse.x * 4 + (Math.cos(angle) * 2),
                    y: state.mouse.y * 4 + (Math.sin(angle) * 2),
                    z: random.noise3D(x, y, z * 2, 2, 4),
                })
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
            <boxGeometry attach="geometry" args={[2, 2, 2]}/>
            <meshBasicMaterial attach="material" color={color}/>

        </mesh>
    );
};

export default MeshContainer;