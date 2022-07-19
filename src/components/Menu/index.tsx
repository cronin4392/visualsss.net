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
    text: "About",
    link: "/about",
  },
  {
    text: "Contact",
    link: "/contact",
  },
  {
    text: "Youtube",
    link: "https://youtube.com",
    external: true,
  },
];

type MenuProps = {};

const Menu: React.FC<MenuProps> = () => {
  return (
    <div className={styles.Container}>
      {menuItems.map((item, index) => (
        <MenuItem {...item} key={index} />
      ))}
    </div>
  );
};

const MenuItem: React.FC<MenuItem> = ({ text, link, external }) => (
  <div className={styles.MenuItem}>
    <span className="all-caps-adjust">
      <LinkWrapper href={link}>{text}</LinkWrapper>
    </span>
  </div>
);

export default Menu;
