import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html center>
      <span className='canvas-loader' role='status' aria-label='Loading 3D model' />
    </Html>
  )
}

export default Loader