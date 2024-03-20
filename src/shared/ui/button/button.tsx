import { ButtonHTMLAttributes, FC } from "react";
import cx from 'classnames';
import styles from './button.module.css';

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    block?: boolean;
}

export const Button: FC<BtnProps> =
    ({
         children,
         className,
         block = true,
         ...otherProps
     }) => {
        return (
            <button type="button" className={cx(styles.btn, {
                [styles.block]: block,
            }, [className])} {...otherProps}>
                <span className={styles.content}>{children}</span>
            </button>
        )
    };
