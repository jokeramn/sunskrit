import { FC, memo } from "react";
import styles from "./accordion-item.module.scss";
import cx from "classnames";
import { AccordionDataType } from "shared/model";

export const AccordionItem: FC<AccordionDataType> = memo((props) => {
    const {
        img,
        textContent,
        icon,
        content,
        handleClick,
        isActive,
        id
    } = props;

    return (
        <div className={styles.section} onClick={() => handleClick(id)}>
            <div className={styles.block}>
                <div className={styles.imgWrapper}>
                    <img height={25} width={25} src={img.src} alt={img.alt}/>
                </div>
                <div className={styles.textBlock}>
                    {textContent}
                </div>
                <div
                    className={cx(styles.arrow, {[styles.isActive]: isActive})}
                >
                    <img src={icon.src} alt={icon.alt}/>
                </div>
            </div>
            <div className={cx(styles.collapse, {
                [styles.open]: isActive
            })}>
                <div
                    className={styles.content}
                >
                    {content}
                </div>
            </div>
        </div>
    )
});
