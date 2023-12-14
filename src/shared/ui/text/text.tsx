import React, { FC, HTMLProps, ReactNode } from 'react';
import styles from "./text.module.scss";
import cx from "classnames";

type Color = 'primary' | 'secondary' | 'additional' | 'black';

const enum Colors {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ADDITIONAL = 'additional',
    BLACK = 'black',
}

type TitleProps = {
    children: ReactNode;
    className?: string;
    color: Color;
} & HTMLProps<HTMLSpanElement>;

export const Text: FC<TitleProps> = ({children, className, color, ...rest}) => {

    return (
        <span className={cx(styles.text, {
            [styles.primary]: color === Colors.PRIMARY,
            [styles.secondary]: color === Colors.SECONDARY,
            [styles.additional]: color === Colors.ADDITIONAL,
            [styles.black]: color === Colors.BLACK,
        }, [className])} {...rest}>
            {children}
        </span>
    );
};
