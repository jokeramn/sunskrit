import styles from "./bonus.module.scss";
import { Button, ImageWithPreload, Text, Title } from "shared/ui";
import phone from 'images/phone.png';

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

            <div className={styles.bonusTextInfo}>
                <Text color="additional">400</Text> приветственных бонусов
                кэшбэк <Text color="additional">3</Text>%, <Text color="additional">6</Text>% и <Text
                color="additional">9</Text>%
                <Text color="additional">1</Text> бонус = <Text color="additional">1</Text> рубль
            </div>
            <div className={styles.btnBonusWrapper}>
                <Button className={styles.btn} onClick={() => redirectToLink(links.referral)}>
                    получить карту
                </Button>
            </div>
        </section>
    )
}
