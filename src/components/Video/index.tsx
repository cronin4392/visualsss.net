import {
  useEffect,
  useRef,
  forwardRef,
  RefObject,
  useState,
  useCallback,
} from "react";
import type { Youtube, Video as VideoType } from "@/data/videos";
import styles from "./styles.module.scss";

type VideoProps = { video: Youtube | VideoType } & VideoElProps;

type VideoElProps = {
  muted?: boolean;
  playing?: boolean;
};

const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ video, muted, playing }, ref) => {
    return (
      <div className={styles.Container}>
        {video.__type === "youtube" ? (
          <Youtube {...video} />
        ) : (
          <VideoElement {...video} muted={muted} playing={playing} ref={ref} />
        )}
      </div>
    );
  }
);
Video.displayName = "Video";

const Youtube: React.FC<Youtube> = ({ id, size }) => {
  return (
    <div className={styles.YoutubeContainer} data-size={size}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

const VideoElement = forwardRef<HTMLVideoElement, VideoType & VideoElProps>(
  ({ file, muted, size, playing: parentPlaying = true }, ref) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [myPlaying, setMyPlaying] = useState(parentPlaying);
    const playing = parentPlaying || myPlaying;

    // Update myPlaying on load in case video didn't autoplay
    useEffect(() => {
      if (videoRef.current) {
        setMyPlaying(!videoRef.current.paused);
      }
    }, []);

    // Mute video
    useEffect(() => {
      if (videoRef.current && muted !== undefined) {
        videoRef.current.muted = muted;
      }
    }, [muted]);

    // Play/Pause video
    useEffect(() => {
      if (videoRef.current && playing) {
        if (playing) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }, [playing]);

    return (
      <div
        className={styles.VideoContainer}
        data-size={size}
        onClick={() => {
          setMyPlaying(!myPlaying);
        }}
      >
        <video muted={muted} loop playsInline ref={ref || videoRef}>
          <source src={file} type="video/mp4"></source>
        </video>
      </div>
    );
  }
);
VideoElement.displayName = "VideoElement";

export default Video;
