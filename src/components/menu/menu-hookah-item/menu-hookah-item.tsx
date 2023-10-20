import { FC } from "react";
import styles from "./menu-hookah-item.module.css";
import { MenuHookah } from "~/shared";

export type MenuItemProps = MenuHookah;
export const MenuHookahItem: FC<MenuItemProps> = ({
  countHuman,
  icon: Icon,
  countHookah,
  image,
  value,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
          <div className={styles.infoHuman}>
              <div className={styles.countHuman}>{countHuman}</div>
              <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
              </div>
          </div>
          <div className={styles.infoHookah}>
              <div className={styles.countHookah}>{countHookah}</div>
              <div className={styles.imgWrapper}>
                  <img className={styles.img} src={image} alt="img" />
              </div>
          </div>
      </div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};
