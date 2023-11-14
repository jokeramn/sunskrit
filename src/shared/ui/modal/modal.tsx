import { FC, ReactNode } from "react";
import styles from './modal.module.css';
import { createPortal } from "react-dom";

export type ModalProps = {
    children: ReactNode;
    isOpen: boolean;
    handleOpenModal: () => void;
}

export const Modal: FC<ModalProps> = (({children, isOpen, handleOpenModal}) => {

    return (
        createPortal(
            isOpen &&
            <div onClick={handleOpenModal} className={styles.container}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>, document.body
        )
    );
})
