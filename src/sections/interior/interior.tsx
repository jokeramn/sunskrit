import styles from './interior.module.scss';
import { Button, Text, Title } from "shared/ui";
import { Slider } from "components/slider/slider";
import { ForwardedRef, forwardRef } from "react";


export const Interior = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
    const handlerClick = () => window.open("https://t.me/SunskritReserv");

    return (
        <section ref={ref} className={styles.container}>
            <Title color="primary" level={1} className={styles.title}>
                интерьер
            </Title>
            <Text color="secondary" className={styles.text}>
                Наше заведение состоит из двух залов: игровой,
                где вы можете поиграть в PS5 и уютный тихий зал,
                где можно поработать и просто спокойно провести время
            </Text>
            <Slider/>
            <Button onClick={handlerClick} className={styles.button}>забронировать стол</Button>
        </section>
    )
})
