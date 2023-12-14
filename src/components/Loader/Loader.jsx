import { RotatingLines } from 'react-loader-spinner';

const Loader = () => (
<RotatingLines
  strokeColor="yellow"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
);
export default Loader;