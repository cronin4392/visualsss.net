import LinkWrapper from "../LinkWrapper";
import styles from "./styles.module.scss";

type MenuItem = {
  text: string;
  link: string;
  external?: boolean;
};

type MenuItems = Array<MenuItem>;

const menuItems: MenuItems = [
  {
    text: "My Work",
    link: "/content",
  },
  {
    text: "Shows",
    link: "/events",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Instagram",
    link: "https://www.instagram.com/visualsssssssss/",
  },
  {
    text: "Youtube",
    link: "https://www.youtube.com/c/Visualsss",
  },
  {
    text: "Contact",
    link: "mailto:visualsssssssss@gmail.com",
  },
];

type MenuProps = {};

const Menu: React.FC<MenuProps> = () => {
  return (
    <div className={styles.Container}>
      {menuItems.map((item, index) => {
        if (index === menuItems.length - 1) {
          return (
            <div key={index} className={styles.LastWrapper}>
              <MenuItem {...item} />
              <PlayButton />
            </div>
          );
        }
        return <MenuItem {...item} key={index} />;
      })}
    </div>
  );
};

const MenuItem: React.FC<MenuItem> = ({ text, link }) => (
  <div className={styles.MenuItem}>
    <span className="caps">
      <LinkWrapper href={link}>{text}</LinkWrapper>
    </span>
  </div>
);

const PlayButton: React.FC = () => {
  return (
    <LinkWrapper href="/video" linkProps={{ className: styles.PlayButton }}>
      <span className="icon">▶</span>
    </LinkWrapper>
  );
};

export default Menu;
