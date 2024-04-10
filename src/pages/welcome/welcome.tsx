import styles from "./welcome.module.scss";
import { Contacts } from "sections/contacts";
import { Main } from "sections/main";
import { Bonus } from "sections/bonus";
import { Interior } from "sections/interior";
import { Menu } from "components/menu/menu";
import { useRef } from "react";

export const Welcome = () => {
    const mainRef = useRef(null);
    const bonusRef = useRef(null);
    const interiorRef = useRef(null);
    const contactsRef = useRef(null);
    const sectionRefs = [mainRef, bonusRef, interiorRef, contactsRef];

    return (
        <div className={styles.root}>
            <Menu
                sectionRefs={sectionRefs}
                scrollToSection={(ref) => {
                    if (ref.current) {
                        ref.current.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            />
            <Main ref={mainRef}/>
            <Bonus ref={bonusRef}/>
            <Interior ref={interiorRef}/>
            <Contacts ref={contactsRef}/>
        </div>
    )
};
