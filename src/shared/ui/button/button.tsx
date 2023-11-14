import { ButtonHTMLAttributes, FC } from "react";
import cx from 'classnames';
import styles from './button.module.css';

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<BtnProps> =
    ({
         children,
         className,
         ...otherProps
     }) => {
        return (
            <button type="button" className={cx(styles.btn, {}, [className])} {...otherProps}>
                <span className={styles.content}>{children}</span>
            </button>
        )
    };
