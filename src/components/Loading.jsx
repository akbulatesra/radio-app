import { ColorRing } from 'react-loader-spinner';
import styles from '../styles/Loading.module.scss';

const Loading = () => {
  return (
    <ColorRing
      visible={true}
      height="300"
      width="300"
      ariaLabel="vortex-loading"
      wrapperClass={styles.loader}
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  );
};
export default Loading;
