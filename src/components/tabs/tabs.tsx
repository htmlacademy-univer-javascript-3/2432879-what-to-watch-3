import {Link} from 'react-router-dom';
import {FilmInfo} from '../../types/films';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import {useState} from 'react';
import cn from 'classnames';

type TabsProps = {
  filmInfo: FilmInfo;
}

function Tabs({filmInfo}: TabsProps) {

  const [tab, setTab] = useState<'overview' | 'details' | 'reviews'>('overview');

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={cn('film-nav__item', {'film-nav__item--active': tab === 'overview'})}>
            <Link onClick={() => setTab('overview')} to="#" className="film-nav__link">Overview</Link>
          </li>
          <li className={cn('film-nav__item', {'film-nav__item--active': tab === 'details'})}>
            <Link onClick={() => setTab('details')} to="#" className="film-nav__link">Details</Link>
          </li>
          <li className={cn('film-nav__item', {'film-nav__item--active': tab === 'reviews'})}>
            <Link onClick={() => setTab('reviews')} to="#" className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>

      {tab === 'overview' && <Overview filmInfo={filmInfo}/>}

      {tab === 'details' && <Details/>}

      {tab === 'reviews' && <Reviews/>}
    </div>
  );
}

export default Tabs;
