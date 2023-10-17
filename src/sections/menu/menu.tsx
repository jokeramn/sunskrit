import styles from "./menu.module.css";
import { MenuItem } from "components/menu/menu-item";
import { ReactComponent as HumanIcon } from "icons/man.svg";
import hookah from "images/shisha.png";
import { MenuHookah } from "~/shared";

const hookahMenu: MenuHookah[] = [
  {
    countHuman: 1,
    icon: HumanIcon,
    countHookah: 1,
    image: hookah,
    value: 1200,
    id: 1,
  },
  {
    countHuman: "2-4",
    icon: HumanIcon,
    countHookah: 1,
    image: hookah,
    value: 1400,
    id: 2,
  },
  {
    countHuman: "5-6",
    icon: HumanIcon,
    countHookah: 2,
    image: hookah,
    value: 2600,
    id: 3,
  },
  {
    countHuman: "7-8",
    icon: HumanIcon,
    countHookah: 3,
    image: hookah,
    value: 3800,
    id: 4,
  },
];
export const Menu = () => (
  <div className={styles.root}>
    <h1 className={styles.title}>Кальяны</h1>
    <div>
      {hookahMenu.map((hookahItem) => (
        <MenuItem key={hookahItem.id} {...hookahItem} />
      ))}
    </div>
  </div>
);
