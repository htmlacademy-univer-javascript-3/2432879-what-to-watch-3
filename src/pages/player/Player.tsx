import {useNavigate,} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {useRef, useState} from 'react';


function Player() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentFilm = useAppSelector((state) => state.currentFilm);
  const navigate = useNavigate();
  const [isPlay, setIsPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const onExitHandle = () => {
    navigate(`/films/${currentFilm.id}`);
  };

  const fullScreenHandle = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen().then();
    }
  };

  const videoControlHandle = (control: string) => {
    if (control === 'play' && videoRef.current) {
      videoRef.current.play();
      setIsPlay(true);
      intervalRef.current = setInterval(() => {
        if (videoRef.current) {
          setCurrentTime(videoRef.current?.currentTime);
          setProgress((videoRef.current?.currentTime / videoRef.current?.duration) * 100);
        }
      }, 1000);
    } else if (control === 'pause' && videoRef.current) {
      videoRef.current.pause();
      setIsPlay(false);
      clearTimeout(intervalRef.current as NodeJS.Timeout);
    }
  };

  const time = `${Math.floor(currentTime / 60)}:${(`0${Math.floor(currentTime % 60)}`).slice(-2)}`;

  return (
    <div className="player">
      <video ref={videoRef} src={currentFilm.videoLink} className="player__video" poster={currentFilm.backgroundImage}></video>
      <button onClick={onExitHandle} type="button" className="player__exit">Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{time}</div>
        </div>

        <div className="player__controls-row">
          {isPlay ?
            <button onClick={() => videoControlHandle('pause')} type="button" className="player__play">
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button> :
            <button onClick={() => videoControlHandle('play')} type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>}
          <div className="player__name">{currentFilm.name}</div>

          <button onClick={fullScreenHandle} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
