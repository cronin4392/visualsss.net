import styles from "./styles.module.scss";

type HeroProps = {
  title: string;
  text: string;
};

const Hero: React.FC<HeroProps> = ({ title, text }) => {
  return (
    <header className={styles.Hero}>
      <div className={styles.Container}>
        <div className={styles.TextWrapper}>
          <h1 className={styles.Title}>{title}</h1>
          <p className={styles.Text}>{text}</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
