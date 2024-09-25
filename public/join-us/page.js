// "use client";
// if (!Promise.withResolvers) {
//   Promise.withResolvers = function () {
//     let resolve, reject;
//     const promise = new Promise((res, rej) => {
//       resolve = res;
//       reject = rej;
//     });
//     return { promise, resolve, reject };
//   };
// }

// import { Footer } from "../components/footer/Footer";
// import { Header } from "../components/header/Header";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { PDFViewer } from "../components/pdf-viewer/PDFViewer";

// export default function JoinUs() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
//     checkIsMobile();
//     window.addEventListener("resize", checkIsMobile);
//     return () => window.removeEventListener("resize", checkIsMobile);
//   }, []);

//   const MobilePage = () => {
//     return (
//       <div className="py-4">
//         <span>
//           Click{" "}
//           <Link
//             download
//             href={pkp3FormLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="underline">
//             here
//           </Link>{" "}
//           to download the form
//         </span>
//       </div>
//     );
//   };

//   const DesktopPage = () => {
//     return (
//       <PDFViewer
//         numPages={numPages}
//         setNumPages={setNumPages}
//         pageNumber={pageNumber}
//       />
//     );
//   };

//   return (
//     <main className="min-h-screen flex flex-col">
//       <Header />
//       <div className="flex-col flex flex-grow overflow-y-auto px-4 py-4">
//         <span>Here are some details on the membership fee payment.</span>
//         <span>Interested in joining us? download the file below</span>
//         {isMobile ? <MobilePage /> : <DesktopPage />}
//       </div>
//       <Footer />
//     </main>
//   );
// }
