export type Film = {
  id: string;
  srcCard: string;
  filmName: string;
  previewVideoLink: string;
  genre: string;
}

export type Currentfilm = {
  name: string;
  image: string;
  backgroundPoster: string;
  playerPoster: string;
  time: string;
}

export type PromoFilm = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export type FilmInfo = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: false;
}
