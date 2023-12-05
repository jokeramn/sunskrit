import React, { FC, HTMLProps, ReactNode } from 'react';
import styles from "./title.module.scss";
import cx from "classnames";

type TitleProps  = {
    children: ReactNode;
    className?: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
} & HTMLProps<HTMLHeadingElement>;

export const Title: FC<TitleProps> = ({children, className, level, ...rest}) => {
    const TagName = `h${level}` as const;

    return (
        <TagName className={cx(styles.title, {}, [className])} {...rest}>
            {children}
        </TagName>
    );
};
