import { RefObject } from "react";
import styles from "./about.module.css";
import logo from 'images/logo.png'
import like from 'images/like.png'
import { Button } from "shared/ui/button";

export const About = ({menuRef}: { menuRef: RefObject<HTMLDivElement> }) => {

    const handleScrollToMenu = () => {
        if (menuRef.current) {
            menuRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    const redirectToLink = (link: string) => window.open(link, "_blank");

    const links = {
        reviews: 'https://yandex.ru/maps/org/sunskrit_lounge/1793286096/reviews/?l=sat%2Cskl&ll=30.359633%2C59.947194&mode=search&sctx=ZAAAAAgBEAAaKAoSCT27fOvDej5AEbHc0mpI7k1AEhIJ2o0%2B5gMCbT8R5xw8E5okZj8iBgABAgMEBSgKOABAwJ4BSAFqAnJ1nQHNzEw9oAEAqAEAvQGinEUjwgEF0L%2BN1wbqAQDyAQD4AQCCAhDQodCw0L3RgdC60YDQuNGCigIAkgIAmgIKdG91Y2gtbWFwcw%3D%3D&sll=30.359633%2C59.947194&sspn=0.014162%2C0.010786&tab=reviews&text=%D0%A1%D0%B0%D0%BD%D1%81%D0%BA%D1%80%D0%B8%D1%82&z=15',
        referral: "https://ek215.quickresto.ru/cpr/registration",
    }

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.wrapperImg}>
                    <img width={350} height={350} className={styles.imgLogo} src={logo} alt="ЛОГО SUNSKRIT"/>
                </div>
                <h1 className={styles.title}>Sunskrit Lounge</h1>
                <div className={styles.workInfo}>
                    <div className={styles.workInfoText}>
                        <div>Время работы:</div>
                        <div>пн-вс 12:00-01:00</div>
                    </div>
                    <div className={styles.workInfoTextRight}>
                        <div>адрес:</div>
                        <div>пр-т Чернышевского 10</div>
                    </div>
                </div>
                <div className={styles.btnWrapper}>
                    <Button className={styles.btn} onClick={handleScrollToMenu}>
                        menu
                    </Button>
                    <Button onClick={() => redirectToLink(links.referral)} className={styles.btn}>
                        карта лояльности
                    </Button>
                    <Button onClick={() => redirectToLink(links.reviews)} className={styles.btn}>
                        отзывы
                    </Button>
                </div>
                <div className={styles.advantages}>
                    <h2 className={styles.advantagesTitle}>преимущества</h2>
                    <div className={styles.advantagesWrapper}>
                        <div className={styles.advantagesInfo}>
                            <div className={styles.wrapperImg}>
                                <img width={35} src={like} alt="LIKE"/>
                            </div>
                            <div className={styles.advantagesText}>быстрый Wi-Fi</div>
                        </div>
                        <div className={styles.advantagesInfo}>
                            <div className={styles.wrapperImg}>
                                <img width={35} src={like} alt="LIKE"/>
                            </div>
                            <div className={styles.advantagesText}>Игровой зал с PlayStation 5</div>
                        </div>
                        <div className={styles.advantagesInfo}>
                            <div className={styles.wrapperImg}>
                                <img width={35} src={like} alt="LIKE"/>
                            </div>
                            <div className={styles.advantagesText}>Импортные напитки</div>
                        </div>
                        <div className={styles.advantagesInfo}>
                            <div className={styles.wrapperImg}>
                                <img width={35} src={like} alt="LIKE"/>
                            </div>
                            <div className={styles.advantagesText}>Pet friendly</div>
                        </div>
                        <div className={styles.advantagesInfo}>
                            <div className={styles.wrapperImg}>
                                <img width={35} src={like} alt="LIKE"/>
                            </div>
                            <div className={styles.advantagesText}>программа лояльности</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
