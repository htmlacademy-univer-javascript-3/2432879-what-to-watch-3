import {Currentfilm, Film, FilmInfo, PromoFilm} from '../types/films';

export const films: Film[] = [
  {id: '1', previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg', name: 'Fantastic Beasts: The Crimes of Grindelwald', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Comedy'},
  {id: '2', previewImage: 'img/bohemian-rhapsody.jpg', name: 'Bohemian Rhapsody', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Crime'},
  {id: '3', previewImage: 'img/macbeth.jpg', name: 'Macbeth', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Documentary'},
  {id: '4', previewImage: 'img/aviator.jpg', name: 'Aviator', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Drama'},
  {id: '5', previewImage: 'img/we-need-to-talk-about-kevin.jpg', name: 'We need to talk about Kevin', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Horror'},
  {id: '6', previewImage: 'img/what-we-do-in-the-shadows.jpg', name: 'What we do in the shadows', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Kids & Family'},
  {id: '7', previewImage: 'img/revenant.jpg', name: 'Revenant', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Romance'},
  {id: '8', previewImage: 'img/johnny-english.jpg', name: 'Johnny English', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Thriller'},
  {id: '9', previewImage: 'img/shutter-island.jpg', name: 'Shutter Island', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Comedy'},
  {id: '10', previewImage: 'img/pulp-fiction.jpg', name: 'Pulp Fiction', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Crime'},
  {id: '11', previewImage: 'img/no-country-for-old-men.jpg', name: 'No Country for Old Men', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Documentary'},
  {id: '12', previewImage: 'img/snatch.jpg', name: 'Snatch', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Drama'},
  {id: '13', previewImage: 'img/moonrise-kingdom.jpg', name: 'Moonrise Kingdom', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Horror'},
  {id: '14', previewImage: 'img/seven-years-in-tibet.jpg', name: 'Seven Years in Tibet', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Kids & Family'},
  {id: '15', previewImage: 'img/war-of-the-worlds.jpg', name: 'War of the Worlds', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Romance'},
  {id: '16', previewImage: 'img/dardjeeling-limited.jpg', name: 'Dardjeeling Limited', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Thriller'},
  {id: '17', previewImage: 'img/orlando.jpg', name: 'Orlando', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Thriller'},
  {id: '18', previewImage: 'img/mindhunter.jpg', name: 'Mindhunter', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Thriller'},
  {id: '19', previewImage: 'img/midnight-special.jpg', name: 'Midnight Special', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Thriller'},
];

export const comediesFilms: Film[] = [
  {id: '5', previewImage: 'img/we-need-to-talk-about-kevin.jpg', name: 'We need to talk about Kevin', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Drama'},
  {id: '6', previewImage: 'img/what-we-do-in-the-shadows.jpg', name: 'What we do in the shadows', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Drama'},
  {id: '7', previewImage: 'img/revenant.jpg', name: 'Revenant', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Drama'},
  {id: '8', previewImage: 'img/johnny-english.jpg', name: 'Johnny English', previewVideoLink: '../../public/video/videoExample.mp4', genre: 'Drama'},
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


