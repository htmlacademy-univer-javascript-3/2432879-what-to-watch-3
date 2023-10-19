import styles from './styles/page404.module.css';
import ScaredCatSVG from '../../components/scaredCatSVG/scaredCatSVG';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function Page404() {
  return (
    <div className={styles.container}>
      <ScaredCatSVG/>
      <b>404</b>
      <p>Page not found</p>
      <Link to={AppRoute.Main}>Back to main page</Link>
    </div>
  );
}

export default Page404;
