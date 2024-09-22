import Image from "next/image";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { MainContent } from "./components/main-content/MainContent";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative">
        <Header />
        <Image
          className="relative "
          src={"/test.jpg"}
          layout="responsive"
          height={0}
          width={0}
        />
      </div>

      <MainContent />
      <Footer />
    </main>
  );
}
