import { Button, Text, Title } from "shared/ui";
import styles from './main.module.scss';
import { useNavigate } from "react-router-dom";

export const Main = () => {
    const navigate = useNavigate();

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <Title color="secondary" level={1} className={styles.title}>
                    Sunskrit Lounge
                </Title>
                <Text color="secondary" className={styles.text}>
                    Добро пожаловать в уютный лаунж  с PS5 и настольными играми
                </Text>
                <div className={styles.btnWrapper}>
                    <Button className={styles.btn} onClick={() => navigate("/menu")}>
                        меню
                    </Button>
                </div>
            </div>
            <div className={styles.workInfo}>
                <Text color="secondary">
                    Проспект Чернышевского 10
                </Text>
                <Text color="secondary">
                    Пн-Вс 12:00 - 01:00
                </Text>
                <a href="tel:+79219352535">
                    <Text color="secondary">
                        +7 (921) 935-25-35
                    </Text>
                </a>
            </div>
        </section>
    )
}
