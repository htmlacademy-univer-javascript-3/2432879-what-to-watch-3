import {Currentfilm, Film} from '../types/films';

export const films: Film[] = [
  {id: '1', srcCard: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg', filmName: 'Fantastic Beasts: The Crimes of Grindelwald'},
  {id: '2', srcCard: 'img/bohemian-rhapsody.jpg', filmName: 'Bohemian Rhapsody'},
  {id: '3', srcCard: 'img/macbeth.jpg', filmName: 'Macbeth'},
  {id: '4', srcCard: 'img/aviator.jpg', filmName: 'Aviator'},
  {id: '5', srcCard: 'img/we-need-to-talk-about-kevin.jpg', filmName: 'We need to talk about Kevin'},
  {id: '6', srcCard: 'img/what-we-do-in-the-shadows.jpg', filmName: 'What we do in the shadows'},
  {id: '7', srcCard: 'img/revenant.jpg', filmName: 'Revenant'},
  {id: '8', srcCard: 'img/johnny-english.jpg', filmName: 'Johnny English'},
];

export const currentFilm: Currentfilm = {
  name: 'The Grand Budapest Hotel',
  backgroundPoster: 'markup/img/the-grand-budapest-hotel-poster.jpg',
  image: 'markup/img/bg-the-grand-budapest-hotel.jpg',
  playerPoster: 'markup/img/player-poster.jpg',
  time: '1:30:29'
};

export const FilmInfoMain = {
  promoFilmName: 'The Grand Budapest Hotel',
  promoFilmGenre: 'Drama',
  promoFilmDate: '2014',
} as const;


