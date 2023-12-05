import React, { FC, HTMLProps, ReactNode } from 'react';
import styles from "./text.module.scss";
import cx from "classnames";

type TitleProps  = {
    children: ReactNode;
    className?: string;
} & HTMLProps<HTMLSpanElement>;

export const Text: FC<TitleProps> = ({children, className, ...rest}) => {

    return (
        <span className={cx(styles.text, {}, [className])} {...rest}>
            {children}
        </span>
    );
};
