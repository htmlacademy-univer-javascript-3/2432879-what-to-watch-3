export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const APIRoute = {
  Films: '/films',
  Login: '/login',
  Logout: '/logout',
  Promo: '/promo',
  Favorite: '/favorite',
  Comments: '/comments',
};

