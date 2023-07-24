import { videos } from "./data";

const FunnyVideos: React.FC = () => {
  const video = videos[0];

  return (
    <div>
      <video autoPlay muted playsInline controls>
        <source src={`/funny/${video}`} type="video/mp4" />
      </video>
    </div>
  );
};

export default FunnyVideos;
