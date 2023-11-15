import {Film} from '../types/films';

export const filmsByGenre = (filmsArr: Film[], genreActive: string) => {
  if (genreActive === 'All genres') {
    return filmsArr;
  } else{
    return filmsArr.filter((film) => film.genre === genreActive);
  }
};
