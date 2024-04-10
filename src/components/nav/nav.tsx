import styles from "./nav.module.scss";
import cx from 'classnames';
import { FC } from "react";
import { NavItemData } from "components/menu/data";
import { Links, Text } from "shared/ui";
import { LinkDataType } from "shared/model/types";

type NavProps = {
    isActive: boolean;
    setActive: () => void;
    items: NavItemData[];
    links: LinkDataType[];
}
export const Nav: FC<NavProps> = ({isActive, setActive, items, links}) => {

    return (
        <div className={cx(styles.container, {
            [styles.active]: isActive
        })}>
            <button type="button" onClick={setActive} className={styles.burger}/>
            <nav>
                <ul className={styles.itemsContent}>
                    {
                        items.map((item =>
                            <li key={item.key} className={styles.item}>
                                <Text color="secondary" className={styles.text}>
                                    {item.name}
                                </Text>
                            </li>))
                    }
                </ul>
            </nav>
            <div>
                <Links links={links}/>
            </div>
        </div>
    )
}
