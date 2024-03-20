import { PdfViewer } from "sections/pdf-viewer";
import MenuPdf from 'pdf/menu.pdf';
import styles from "./menu.module.scss";

export const Menu = () => {

    return (
        <section className={styles.container}>
            <PdfViewer file={MenuPdf}/>
        </section>
    )
}
