import React, { use, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";

export function Ship(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/models/low_poly_space_shuttle.glb");

  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });
  useEffect(() => {
    ySpring.set(-36);
  }, [ySpring]);
  useFrame(() => {
    ref.current.position.y = ySpring.get();
  });
  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      scale={props.scale || 2.5}
      rotation={props.rotation || [0, -2, 0]}
      position={props.position || [28, -25, -45.4]}
    >
      <group position={[-0.036, 9.425, 1.083]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Dark_Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Red_Outline_2}
        />
      </group>
      <group position={[-0.036, 9.425, -1.168]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Dark_Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Red_Outline_2}
        />
      </group>
      <group position={[0.195, 9.461, -0.043]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.GrayBlack}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.Dark_Grey}
        />
      </group>
      <group position={[1.321, 9.418, -0.043]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.Off_White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.Brighter_Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.Dark_Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.Red_Outline_2}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/low_poly_space_shuttle.glb");
