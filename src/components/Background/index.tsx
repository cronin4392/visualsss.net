import Image from "next/future/image";
import styles from "./styles.module.scss";
import backgroundImage from "../../../public/Background.jpg";

type BackgroundProps = {};

const Background: React.FC<BackgroundProps> = () => {
  return (
    <div className={styles.Container}>
      <Image src={backgroundImage} alt="Background Image" />
    </div>
  );
};

export default Background;
