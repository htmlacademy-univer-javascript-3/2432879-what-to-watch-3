

type VideoPlayerProps = {
  previewVideoLink: string;
  poster: string;
}

function VideoPlayer({previewVideoLink, poster}: VideoPlayerProps) {
  return (
    <video muted autoPlay src={previewVideoLink} className="player__video" poster={poster}></video>
  );
}

export default VideoPlayer;
