import styles from "./welcome.module.scss";
import { Contacts } from "sections/contacts";
import { Main } from "sections/main";
import { Bonus } from "sections/bonus";
import { Interior } from "sections/interior";
import { Menu } from "components/menu/menu";

export const Welcome = () => {

    return (
        <div className={styles.root}>
            <Menu/>
            <Main/>
            <Bonus/>
            <Interior/>
            <Contacts/>
        </div>
    )
};
