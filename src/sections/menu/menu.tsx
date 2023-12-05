import { PdfViewer } from "components/pdf-viewer/pdf-viewer";
import MenuPdf from 'pdf/menu.pdf';
import styles from "./menu.module.scss";

export const Menu = () => {

    return (
        <div className={styles.container}>
            <PdfViewer file={MenuPdf}/>
        </div>
    )
}
