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
    "361079877_832972305151074_7510414561150590844_n.jpg",
    "https://www.instagram.com/p/Cu0pEa0Mn3f/"
  ),
  newEvent(
    "358343112_1344444859810945_7357921070411140414_n.jpg",
    "https://www.instagram.com/p/CucYaEXraRF/"
  ),
  newEvent(
    "357462921_17885053259865983_3831629094861259796_n.jpg",
    "https://www.instagram.com/p/CuTveByOPpn/"
  ),
  newEvent(
    "354631812_649042750482216_4909177066021006987_n.jpg",
    "https://www.instagram.com/p/Ctre-RoOpxs/"
  ),
  newEvent(
    "349242207_218618767606058_3303427049883665325_n.jpg",
    "https://www.instagram.com/p/CszEOkzPDhw/"
  ),
  newEvent(
    "348469017_255833290361078_1809736023643309273_n.jpg",
    "https://www.instagram.com/p/CsogVJNgqi6/"
  ),
  newEvent(
    "345876420_212459704863290_3031553673630290575_n.jpg",
    "https://www.instagram.com/p/CrRLGtXAb5c/"
  ),
  newEvent(
    "339486063_667776535358490_7421564188815901878_n.jpg",
    "https://www.instagram.com/p/CqtARdPutT8/"
  ),
  newEvent(
    "335938308_1360249064819368_788037827450957237_n.jpg",
    "https://www.instagram.com/p/CpyR18Tv7wf/"
  ),
  newEvent(
    "332150038_1193741991331430_1674588406660028255_n.jpg",
    "https://www.instagram.com/p/CpVeWW5JNx9/"
  ),
  newEvent(
    "337916489_247209104329822_9051679119664997675_n.jpg",
    "https://www.instagram.com/p/CqTBajdOlRt/"
  ),
  newEvent(
    "331904356_619338783536730_3665413920507780767_n.jpg",
    "https://www.instagram.com/p/Co8HT78vGnX/"
  ),
  newEvent(
    "328833427_861818491544160_5322782934398466870_n.jpg",
    "https://www.instagram.com/p/Coh2lfAOC4i/"
  ),
  newEvent(
    "329643213_218811147289383_3652077488203939761_n.jpg",
    "https://www.instagram.com/p/CoN_EXnOdN7/"
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
    "312839003_3265009280382159_5114955832172584633_n.jpg",
    "https://www.instagram.com/p/CkTZCZvr9z_/"
  ),
  newEvent(
    "309716765_805027504021186_5853260455546523154_n.jpg",
    "https://www.instagram.com/p/CjLZFH7uy-r/"
  ),
  newEvent(
    "295498291_5605811119430106_8761786882719309770_n.jpg",
    "https://www.instagram.com/p/Cgksxe-Pqlb/"
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
