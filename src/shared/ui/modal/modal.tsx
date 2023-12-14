import { FC, ReactNode, useEffect } from "react";
import styles from './modal.module.css';
import { createPortal } from "react-dom";
import cx from "classnames";

export type ModalProps = {
    children: ReactNode;
    isOpen: boolean;
}

export const Modal: FC<ModalProps> = (({children, isOpen}) => {

    useEffect(() => {
        if (document) {
            document.body.style.overflow = isOpen ? 'hidden' : 'auto'
        }
    }, [isOpen])


    return (
        createPortal(
            <div className={cx(styles.container, {
                [styles.close]: !isOpen,
            })}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>, document.body
        )
    );
})
