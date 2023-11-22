import { PdfViewer } from "components/pdf-viewer/pdf-viewer";
import PdfFood from 'pdf/food.pdf';
import styles from "./food.module.css";

export const Food = () => {

    return (
        <div className={styles.container}>
            <PdfViewer file={PdfFood}/>
        </div>
    )
}
