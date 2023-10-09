import WelcomePage from '../../pages/welcomePage/WelcomePage';
// import FilmPage from "../../pages/filmPage/FilmPage";
// import LoginPage from "../../pages/loginPage/LoginPage";
// import MyListPage from "../../pages/myListPage/MyListPage";
// import Player from "../../pages/player/Player";
// import ReviewPage from "../../pages/reviewPage/reviewPage";

type AppProps = {
  promoFilmName: string;
  promoFilmGenre: string;
  promoFilmDate: string;
}

function App({promoFilmName, promoFilmGenre, promoFilmDate}: AppProps) {
  return (
    <WelcomePage promoFilmName={promoFilmName} promoFilmGenre={promoFilmGenre} promoFilmDate={promoFilmDate}/>
    // <FilmPage/>
    // <LoginPage/>
    // <MyListPage/>
    // <Player/>
    // <ReviewPage/>
  );
}

export default App;
