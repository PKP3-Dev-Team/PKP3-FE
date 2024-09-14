// "use client";
import { Document, pdfjs } from "react-pdf";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

export default () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow overflow-y-auto bg-yellow-500">
        {/* <Document file="../../public/form.pdf" /> */}
      </div>
      <Footer />
    </main>
  );
};
