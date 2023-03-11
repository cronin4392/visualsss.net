import Image from "next/image";
import LinkWrapper from "../LinkWrapper";
import styles from "./styles.module.scss";

type Event = {
  file: string;
  url: string;
};

const newEvent = (relFile: string, url: string): Event => {
  const baseUrl = "/photos/";

  const file = `${baseUrl}${relFile}`;
  return { file, url };
};

const videos = [
  newEvent(
    "332150038_1193741991331430_1674588406660028255_n.jpg",
    "https://www.instagram.com/p/CpVeWW5JNx9/"
  ),
  newEvent(
    "331904356_619338783536730_3665413920507780767_n.jpg",
    "https://www.instagram.com/p/Co8HT78vGnX/"
  ),
  newEvent(
    "324228854_1224525951819044_3006262441352929342_n.jpg",
    "https://www.instagram.com/p/CnNI_lHu8NC/"
  ),
  newEvent(
    "313812245_841930900358712_5484835372468612250_n.jpg",
    "https://www.instagram.com/p/CkgdR4vuKBy/"
  ),
  newEvent(
    "312149313_650425669858592_531279673361706553_n.jpg",
    "https://www.instagram.com/p/CkGjGZsgPhg/"
  ),
  newEvent(
    "312990571_1569187836831643_4117045235679569073_n.jpg",
    "https://www.instagram.com/p/CkMqy-wMA3d/"
  ),
  newEvent(
    "91777052_667198214043410_6738829918933772962_n.jpg",
    "https://www.instagram.com/p/B-aUpGDhdg7/"
  ),
];

const Events = () => {
  return (
    <div className={styles.Events}>
      {videos.map((video, index) => (
        <Event {...video} key={index} />
      ))}
    </div>
  );
};

const Event: React.FC<Event> = ({ file, url }) => {
  return (
    <div className={styles.Event}>
      <LinkWrapper href={url}>
        <Image
          src={file}
          alt="Live generated projection"
          sizes="30vw"
          width={640}
          height={640}
        />
      </LinkWrapper>
    </div>
  );
};

export default Events;
