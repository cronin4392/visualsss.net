import { useEffect, useRef, forwardRef, useState } from "react";
import classnames from "classnames";
import { InstagramEmbed } from "react-social-media-embed";
import { useUpdateEffect } from "usehooks-ts";
import {
  IoMdPause,
  IoMdPlay,
  IoMdVolumeHigh,
  IoMdVolumeOff,
} from "react-icons/io";
import type {
  Youtube,
  Video as VideoType,
  Instagram as InstagramType,
} from "@/data/videos";
import styles from "./styles.module.scss";

type VideoProps = { video: Youtube | VideoType | InstagramType } & VideoElProps;

type VideoElProps = {
  audioOn?: boolean;
  playing?: boolean;
  controls?: true;
  videoClassname?: string;
};

const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ video, ...rest }, ref) => {
    return (
      <div className={styles.Container}>
        {video.__type === "youtube" && <Youtube {...video} />}
        {video.__type === "instagram" && <Instagram {...video} />}
        {video.__type === "video" && (
          <VideoElement {...video} {...rest} ref={ref} />
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

const Instagram: React.FC<InstagramType> = ({ id, url, size }) => {
  return (
    <div className={styles.YoutubeContainer} data-size={size}>
      <InstagramEmbed url={url} />
    </div>
  );
};

const VideoElement = forwardRef<HTMLVideoElement, VideoType & VideoElProps>(
  (
    {
      file,
      audioOn: parentAudioOn,
      size,
      playing: parentPlaying = true,
      controls,
      videoClassname,
    },
    ref
  ) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [myPlaying, setMyPlaying] = useState(parentPlaying);
    const [myAudioOn, setMyAudioOn] = useState<boolean | null>(null);
    const playing = parentPlaying && myPlaying;
    const audioOn = myAudioOn !== null ? myAudioOn : parentAudioOn;

    // console.log({ parentPlaying, myPlaying, playing });
    // console.log({ parentAudioOn, myAudioOn, audioOn });

    // Update myPlaying on load in case video didn't autoplay
    useEffect(() => {
      if (videoRef.current) {
        setMyPlaying(!videoRef.current.paused);
      }
    }, []);

    useUpdateEffect(() => {
      videoRef.current?.load();
      videoRef.current?.play();
    }, [file]);

    // Play/Pause video
    useEffect(() => {
      if (videoRef.current) {
        if (playing) {
          videoRef.current.play().catch(() => {
            setMyPlaying(false);
          });
        } else {
          videoRef.current.pause();
        }
      }
    }, [playing]);

    useEffect(() => {
      if (parentPlaying) {
        setMyPlaying(true);
      }
    }, [parentPlaying]);

    useEffect(() => {
      if (parentAudioOn !== undefined) {
        setMyAudioOn(parentAudioOn);
      }
    }, [parentAudioOn]);

    return (
      <div
        className={classnames([styles.VideoContainer, videoClassname])}
        data-size={size}
      >
        <video
          muted={!audioOn}
          loop
          playsInline
          ref={ref || videoRef}
          onClick={() => {
            if (controls) {
              if (myPlaying !== true) {
                setMyPlaying(true);
                setMyAudioOn(true);
              } else {
                setMyAudioOn(!myAudioOn);
              }
            }
          }}
        >
          <source src={file} type="video/mp4"></source>
        </video>
        {controls && (
          <div className={styles.Controls}>
            <button
              className={styles.ControlButton}
              onClick={() => setMyPlaying(!myPlaying)}
            >
              {playing ? <IoMdPause /> : <IoMdPlay />}
            </button>
            <button
              className={styles.ControlButton}
              onClick={() => setMyAudioOn(!myAudioOn)}
            >
              {!audioOn ? <IoMdVolumeOff /> : <IoMdVolumeHigh />}
            </button>
          </div>
        )}
      </div>
    );
  }
);
VideoElement.displayName = "VideoElement";

export default Video;
