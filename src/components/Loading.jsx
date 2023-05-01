import { PacmanLoader } from 'react-spinners';
import 'react-clip-loader/dist/index.css';
import styles from '../styles/Loading.module.scss';

const Loading = () => {
  return <PacmanLoader color="#6AB9A3" className={styles.loader} />;
};
export default Loading;
