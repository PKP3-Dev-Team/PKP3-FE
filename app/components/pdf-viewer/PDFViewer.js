"use client";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export const PDFViewer = ({ numPages, setNumPages, pageNumber }) => {
  const pkp3FormLink = "/PKP3 Membership Form.pdf";
  return (
    <Document file={pkp3FormLink} LoadSuccess={() => setNumPages(numPages)}>
      <Page
        pageNumber={pageNumber}
        renderTextLayer={false}
        renderAnnotationLayer={false}
      />
    </Document>
  );
};
