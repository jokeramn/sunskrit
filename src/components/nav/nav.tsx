import styles from "./nav.module.scss";
import cx from 'classnames';
import { FC, RefObject } from "react";
import { NavItemData } from "components/menu/data";
import { Links, Text } from "shared/ui";
import { LinkDataType } from "shared/model/types";

type NavProps = {
    isActive: boolean;
    setActive: () => void;
    items: NavItemData[];
    links: LinkDataType[];
    scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
    sectionRefs: RefObject<HTMLDivElement>[];
}
export const Nav: FC<NavProps> = ({isActive, setActive, items, links, scrollToSection, sectionRefs}) => {

    const handleItemClick = (index: number) => {
        scrollToSection(sectionRefs[index]);
        setActive(); // Закрыть меню после перехода к секции
    };

    return (
        <div className={cx(styles.container, {
            [styles.active]: isActive
        })}>
            <button type="button" onClick={setActive} className={styles.burger}/>
            <nav>
                <ul className={styles.itemsContent}>
                    {
                        items.map((item, index) =>
                            <li key={item.key} className={styles.item} onClick={() => handleItemClick(index)}>
                                <Text color="secondary" className={styles.text}>
                                    {item.name}
                                </Text>
                            </li>)
                    }
                </ul>
            </nav>
            <div>
                <Links links={links}/>
            </div>
        </div>
    )
}
