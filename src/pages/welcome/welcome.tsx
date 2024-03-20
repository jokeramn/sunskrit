import styles from "./welcome.module.scss";
import { Contacts } from "sections/contacts";
import { Main } from "sections/main";
import { Header } from "components/header";
import { Bonus } from "sections/bonus";

export const Welcome = () => {

    return (
        <div className={styles.root}>
            <Header/>
            <Main/>
            <Bonus/>
            {/*<div className={styles.bonusWrapper}>*/}

            {/*</div>*/}
            <Contacts/>
        </div>
    )
};
