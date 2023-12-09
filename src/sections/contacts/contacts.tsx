import styles from "./contacts.module.scss";
import { Text, Title } from "shared";

export const Contacts = () =>
    <div className={styles.root}>
        <div className={styles.container}>
            <Title level={1} className={styles.title}>
                контакты
            </Title>
            <div className={styles.contactsInfoWrapper}>
                <Text color="secondary">
                    {`Санкт-Петербург, \n
                    Проспект Чернышевского 10`}
                </Text>
                <a href="tel:+79219352525">
                    <Text color="secondary">
                        +7 (921) 935-25-25
                    </Text>
                </a>
                <Text color="secondary">
                    ПН-ВС 12:00 - 01:00
                </Text>
            </div>
            <div>

            </div>
        </div>
    </div>;
