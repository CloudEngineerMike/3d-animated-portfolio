import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ComputerModel } from "./ComputerModel";
import { OrbitControls,PerspectiveCamera, Stage } from "@react-three/drei";

const ComputerModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback="loading...">
            <Stage environment="apartment" intensity={0.5}>
            <ComputerModel/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate/>
            <PerspectiveCamera position={[-4,1,3]} zoom={0.7} makeDefault />
        </Suspense>
    </Canvas>
  )
}

export default ComputerModelContainer