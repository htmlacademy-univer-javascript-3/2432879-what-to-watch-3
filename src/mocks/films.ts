import {Currentfilm, Film, FilmInfo, PromoFilm} from '../types/films';

export const films: Film[] = [
  {id: '1', srcCard: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg', filmName: 'Fantastic Beasts: The Crimes of Grindelwald', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Comedy'},
  {id: '2', srcCard: 'img/bohemian-rhapsody.jpg', filmName: 'Bohemian Rhapsody', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Crime'},
  {id: '3', srcCard: 'img/macbeth.jpg', filmName: 'Macbeth', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Documentary'},
  {id: '4', srcCard: 'img/aviator.jpg', filmName: 'Aviator', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Drama'},
  {id: '5', srcCard: 'img/we-need-to-talk-about-kevin.jpg', filmName: 'We need to talk about Kevin', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Horror'},
  {id: '6', srcCard: 'img/what-we-do-in-the-shadows.jpg', filmName: 'What we do in the shadows', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Kids & Family'},
  {id: '7', srcCard: 'img/revenant.jpg', filmName: 'Revenant', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Romance'},
  {id: '8', srcCard: 'img/johnny-english.jpg', filmName: 'Johnny English', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Thriller'},
];

export const comediesFilms: Film[] = [
  {id: '5', srcCard: 'img/we-need-to-talk-about-kevin.jpg', filmName: 'We need to talk about Kevin', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Drama'},
  {id: '6', srcCard: 'img/what-we-do-in-the-shadows.jpg', filmName: 'What we do in the shadows', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Drama'},
  {id: '7', srcCard: 'img/revenant.jpg', filmName: 'Revenant', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Drama'},
  {id: '8', srcCard: 'img/johnny-english.jpg', filmName: 'Johnny English', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Drama'},
];

export const currentFilm: Currentfilm = {
  name: 'The Grand Budapest Hotel',
  backgroundPoster: 'markup/img/the-grand-budapest-hotel-poster.jpg',
  image: 'markup/img/bg-the-grand-budapest-hotel.jpg',
  playerPoster: 'markup/img/player-poster.jpg',
  time: '1:30:29'
};

export const promoFilmInfo: PromoFilm = {
  id: 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
  name: 'The Grand Budapest Hotel',
  posterImage: 'markup/img/the-grand-budapest-hotel-poster.jpg',
  backgroundImage: 'markup/img/bg-the-grand-budapest-hotel.jpg',
  videoLink: '#',
  genre: 'Drama',
  released: 2014,
  isFavorite: false
} as const;


export const filmInfo: FilmInfo = {
  id: 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
  name: 'The Grand Budapest Hotel',
  posterImage: 'markup/img/the-grand-budapest-hotel-poster.jpg',
  backgroundImage: 'markup/img/bg-the-grand-budapest-hotel.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://url-to-video/video.jpg',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 8.9,
  scoresCount: 240,
  director: 'Wes Anderson',
  starring: [
    'Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe',
  ],
  runTime: 99,
  genre: 'Comedy',
  released: 2014,
  isFavorite: false,
};


