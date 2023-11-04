import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Glasses(props) {
  const { scene } = useGLTF("/glasses.glb");
  return <primitive object={scene} {...props} />;
}

export default function ModelView() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 45 }}
      style={{ position: "absolute", width: "40%", height: "90%" }}
    >
      <PresentationControls speed={1.5} global zoom={0.1} polar={[-0.1, 4]}>
        <Stage environment={"studio"}>
          <Glasses scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}
