import React, { FC, HTMLProps, ReactNode } from 'react';
import styles from "./title.module.scss";
import cx from "classnames";

type Color = 'primary' | 'secondary';

const enum Colors {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}


type TitleProps = {
    children: ReactNode;
    className?: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    color: Color;
} & HTMLProps<HTMLHeadingElement>;

export const Title: FC<TitleProps> = (
    {
        children,
        className,
        color,
        level,
        ...rest
    }) => {
    const TagName = `h${level}` as const;

    return (
        <TagName className={cx(styles.title, {
            [styles.primary]: color === Colors.PRIMARY,
            [styles.secondary]: color === Colors.SECONDARY,
        }, [className])} {...rest}>
            {children}
        </TagName>
    );
};
