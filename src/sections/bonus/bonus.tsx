import styles from "./bonus.module.scss";
import { Button, ImageWithPreload, Title } from "shared/ui";
import phone from 'images/phone.png';
import { Accordion } from "shared/ui/accordion/accordion";

export const Bonus = () => {

    const redirectToLink = (link: string) => window.open(link, "_blank");

    const links = {
        referral: "https://ek215.quickresto.ru/cpr/registration",
    }

    return (
        <section className={styles.container}>
            <Title level={1} color="primary" className={styles.title}>
                Бонусная карта
            </Title>
            <div className={styles.imgWrapper}>
                <ImageWithPreload height={275} width={135} src={phone} alt="телефон"/>
            </div>
            <Accordion />
            <div className={styles.btnBonusWrapper}>
                <Button className={styles.btn} onClick={() => redirectToLink(links.referral)}>
                    получить карту
                </Button>
            </div>
        </section>
    )
}
