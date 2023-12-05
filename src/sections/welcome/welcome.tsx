import { useNavigate } from "react-router-dom";
import styles from "./welcome.module.scss";
import logo from 'images/logo.png'
import phone from 'images/phone.png'
import { Button, Text, Title } from "shared";

export const Welcome = () => {
    const redirectToLink = (link: string) => window.open(link, "_blank");
    const navigate = useNavigate();

    const links = {
        reviews: 'https://yandex.ru/maps/org/Welcomesunskrit_lounge/1793286096/reviews/?l=sat%2Cskl&ll=30.359633%2C59.947194&mode=search&sctx=ZAAAAAgBEAAaKAoSCT27fOvDej5AEbHc0mpI7k1AEhIJ2o0%2B5gMCbT8R5xw8E5okZj8iBgABAgMEBSgKOABAwJ4BSAFqAnJ1nQHNzEw9oAEAqAEAvQGinEUjwgEF0L%2BN1wbqAQDyAQD4AQCCAhDQodCw0L3RgdC60YDQuNGCigIAkgIAmgIKdG91Y2gtbWFwcw%3D%3D&sll=30.359633%2C59.947194&sspn=0.014162%2C0.010786&tab=reviews&text=%D0%A1%D0%B0%D0%BD%D1%81%D0%BA%D1%80%D0%B8%D1%82&z=15',
        referral: "https://ek215.quickresto.ru/cpr/registration",
    }

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.wrapperImg}>
                    <img width={220} height={330} loading="lazy" className={styles.imgLogo} src={logo}
                         alt="ЛОГО SUNSKRIT"/>
                </div>
                <div className={styles.btnWrapper}>
                    <Button className={styles.btn} onClick={() => navigate("/menu")}>
                        меню
                    </Button>
                </div>
                <div className={styles.workInfo}>
                    <span>
                        Проспект Чернышевского 10
                    </span>
                    <span>
                        Пн-Вс 12:00 - 01:00
                    </span>
                </div>
                <Title level={1} className={styles.title}>
                    бонусная карта
                </Title>
                <div className={styles.bonusWrapper}>
                    <span>
                        <Text>400</Text> приветственных бонусов
                    </span>
                    <span>
                        кэшбэк <Text>3</Text>%, <Text>6</Text>% и <Text>9</Text>%
                    </span>
                    <span>
                        <Text>1</Text> бонус = <Text>1</Text> рубль
                    </span>
                </div>
                <div className={styles.btnBonusWrapper}>
                    <Button className={styles.btn} onClick={() => redirectToLink(links.referral)}>
                        получить карту
                    </Button>
                </div>
                <div className={styles.phoneWrapperImg}>
                    <img width={175} height={350} loading="lazy" className={styles.imgLogo} src={phone}
                         alt="ЛОГО SUNSKRIT"/>
                </div>
            </div>
        </div>
    )
};
