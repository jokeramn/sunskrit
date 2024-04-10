import styles from './header.module.scss';
import cx from 'classnames';
import logo from 'icons/logo.svg';
import { FC } from "react";

type HeaderProps = {
    setActiveMenu: () => void;
}

export const Header: FC<HeaderProps> = ({setActiveMenu}) => {

    return (
        <header className={styles.header}>
            <div className={styles.imgWrapper}>
                <img width={60} height={60} src={logo} alt='logo'/>
            </div>
            <button onClick={setActiveMenu} type="button" className={styles.burger}>
                <span className={cx(styles.line, styles.line1)}></span>
                <span className={cx(styles.line, styles.line2)}></span>
                <span className={cx(styles.line, styles.line3)}></span>
            </button>
        </header>
    )
}
