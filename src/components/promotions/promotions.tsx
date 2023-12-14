import { FC, RefObject } from "react";
import styles from "./promotions.module.scss";
import { Text, Title } from "shared";

type PromotionsProps = {
    promotionsRef: RefObject<HTMLDivElement>
}

export const Promotions: FC<PromotionsProps> = ({promotionsRef}) =>
    <div className={styles.content} ref={promotionsRef}>
        <Title level={1}>
            Акции
        </Title>
        <Title level={1} className={styles.subtitle}>
            ВЫИГРАЙ 100 000
            БОНУСОВ
        </Title>
        <div className={styles.promotionContent}>
            <div className={styles.datePrizeInfo}>
                <div className={styles.prizeText}>
                    С <Text className={styles.boldText} color='primary'>
                    01.12.2023
                </Text> по <Text
                    className={styles.boldText} color='primary'>
                    31.12.2023
                </Text> будет проходить розыгрыш <Text
                    className={styles.boldText} color='primary'>
                    100 000
                    бонусов
                </Text>
                </div>
                <div className={styles.prizePlaces}>
                    <span>
                        1 место - <Text color="primary" className={styles.boldText}>50 000</Text> бонусов
                    </span>
                    <span>
                        2 место - <Text color="primary" className={styles.boldText}>30 000</Text> бонусов
                    </span>
                    <span>
                        3 место - <Text color="primary" className={styles.boldText}>20 000</Text> бонусов
                    </span>
                </div>
            </div>
            <Text color="primary" className={styles.conditionTitle}>Условия:</Text>
            <div className={styles.conditions}>
                {
                    `1. Получить нашу бонусную карту \n
                     2. Участвуют чеки от 1850 р. \n
                     3. Количество чеков не ограничено`
                }
            </div>
            <Text color="additional" className={styles.checkText}>
                *Чек за еду в акции не участвует
            </Text>
        </div>
    </div>;
