import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrigamiEarthModel } from "./OrigamiEarthModel";
import { OrbitControls,PerspectiveCamera, Stage } from "@react-three/drei";

const OrigamiEarthModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback="loading...">
            <Stage environment="apartment" intensity={1.2}>
            <OrigamiEarthModel/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7}/>
            <PerspectiveCamera position={[-4,1,3]} zoom={0.78} makeDefault />
        </Suspense>
    </Canvas>
  )
}

export default OrigamiEarthModelContainer