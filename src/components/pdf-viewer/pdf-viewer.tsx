import { FC, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { OnDocumentLoadSuccess } from "react-pdf/dist/cjs/shared/types";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export interface PdfViewerProps {
    file?: File | undefined;
}
export const PdfViewer:FC<PdfViewerProps> = ({file}) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const widthPdfPage = window.innerWidth - window.innerWidth * 0.15;

    const onDocumentLoadSuccess: OnDocumentLoadSuccess = (document) => {
        setNumPages(document.numPages);
    };

    return (
        <div>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        scale={1}
                        width={widthPdfPage}
                        height={600}
                    />
                ))}
            </Document>
        </div>
    );
};

