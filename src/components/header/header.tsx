import styles from './header.module.scss';
import cx from 'classnames';
import logo from 'icons/logo.svg';
export const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.imgWrapper}>
                <img width={42} height={42} src={logo} alt='logo'/>
            </div>
            <div className={styles.burger}>
                <span className={cx(styles.line, styles.line1)}></span>
                <span className={cx(styles.line, styles.line2)}></span>
                <span className={cx(styles.line, styles.line3)}></span>
            </div>
        </header>
    )
}
