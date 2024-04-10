import styles from "./contacts.module.scss";
import { Links, Text, Title } from "shared/ui";
import { MapYandex } from "components/map";
import { Link } from "react-router-dom";
import { PhoneIcon } from "components/icons/phone";
import { LocationIcon } from "components/icons/location";
import { TimeIcon } from "components/icons/time";
import { links } from "shared/model/data";


export const Contacts = () => {

    return (
        <section className={styles.container}>
            <Title color="primary" level={1} className={styles.title}>
                контакты
            </Title>
            <div className={styles.contactsInfoWrapper}>
                <div className={styles.contentInfo}>
                    <div className={styles.iconWrapper}>
                        <LocationIcon
                            width={22}
                            height={25}
                            strokeWidth={1}
                            className={styles.icon}
                        />
                    </div>
                    <Text color="secondary">
                        <Text color="secondary" className={styles.text}>
                            Санкт-Петербург,
                        </Text>
                        <Text color="secondary" className={styles.text}>
                            Проспект Чернышевского 10
                        </Text>
                    </Text>
                </div>
                <div className={styles.contentInfo}>
                    <div className={styles.iconWrapper}>
                        <PhoneIcon
                            width={25}
                            height={25}
                            strokeWidth={1}
                        />
                    </div>
                    <Link to="tel:+79219352535">
                        <Text color="secondary" className={styles.text}>
                            +7 (921) 935-25-35
                        </Text>
                    </Link>
                </div>
                <div className={styles.contentInfo}>
                    <div className={styles.iconWrapper}>
                        <TimeIcon
                            width={25}
                            height={25}
                            strokeWidth={1}
                        />
                    </div>
                    <Text color="secondary" className={styles.text}>
                        ПН-ВС 12:00 - 01:00
                    </Text>
                </div>
            </div>
            <div className={styles.linksWrapper}>
                <Links links={links}/>
            </div>
            <MapYandex/>
        </section>
    )
}

