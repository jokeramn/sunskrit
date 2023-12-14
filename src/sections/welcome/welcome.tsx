import { useNavigate } from "react-router-dom";
import styles from "./welcome.module.scss";
import logo from 'images/logo.png'
import phone from 'images/phone.png'
import { Button, CrossIcon, Text, Title } from "shared";
import { Contacts } from "components/contacts";
import { Modal } from "shared/ui/modal";
import gift from 'images/gift.png';
import { useRef, useState } from "react";
import { Promotions } from "components/promotions";

export const Welcome = () => {
    const redirectToLink = (link: string) => window.open(link, "_blank");
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState<boolean>(true);

    const links = {
        reviews: 'https://yandex.ru/maps/org/Welcomesunskrit_lounge/1793286096/reviews/?l=sat%2Cskl&ll=30.359633%2C59.947194&mode=search&sctx=ZAAAAAgBEAAaKAoSCT27fOvDej5AEbHc0mpI7k1AEhIJ2o0%2B5gMCbT8R5xw8E5okZj8iBgABAgMEBSgKOABAwJ4BSAFqAnJ1nQHNzEw9oAEAqAEAvQGinEUjwgEF0L%2BN1wbqAQDyAQD4AQCCAhDQodCw0L3RgdC60YDQuNGCigIAkgIAmgIKdG91Y2gtbWFwcw%3D%3D&sll=30.359633%2C59.947194&sspn=0.014162%2C0.010786&tab=reviews&text=%D0%A1%D0%B0%D0%BD%D1%81%D0%BA%D1%80%D0%B8%D1%82&z=15',
        referral: "https://ek215.quickresto.ru/cpr/registration",
    }

    const clickHandlerShowModal = () => setShowModal(false);

    const actionsRef = useRef<HTMLDivElement>(null);

    const scrollToActions = () => {
        if (actionsRef.current) {
            actionsRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        setShowModal(false);
    };

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
                <div className={styles.bonusWrapper}>
                    <Title level={1}>
                        бонусная карта
                    </Title>
                    <div className={styles.bonusTextInfo}>
                    <span>
                        <Text color="additional">400</Text> приветственных бонусов
                    </span>
                        <span>
                        кэшбэк <Text color="additional">3</Text>%, <Text color="additional">6</Text>% и <Text
                            color="additional">9</Text>%
                    </span>
                        <span>
                        <Text color="additional">1</Text> бонус = <Text color="additional">1</Text> рубль
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
                <Promotions/>
            </div>
            <Contacts/>
            <Modal isOpen={showModal}>
                <div className={styles.lotteryContent}>
                    <CrossIcon
                        onClick={clickHandlerShowModal}
                        width={30} height={30}
                        className={styles.cross}
                    />
                    <div>
                        <div className={styles.giftImgWrapper}>
                            <img width={200} height={150} src={gift} alt="gift"/>
                        </div>
                    </div>
                    <div className={styles.giftContent}>
                        <div className={styles.giftTextInfo}>
                            <Text color="black" className={styles.dateInfo}>
                                01.12.2023 - 31.12.2023
                            </Text>
                            <Text color="black" className={styles.lotteryInfo}>
                                РОЗЫГРЫШ
                            </Text>
                            <Text color="black" className={styles.bonusInfo}>
                                100 000 бонусов
                            </Text>
                        </div>
                        <div className={styles.giftBtnWrapper}>
                            <Button className={styles.giftBtn} onClick={scrollToActions}>
                                Подробнее
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
};
