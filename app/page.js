import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { MainContent } from "./components/main-content/MainContent";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </main>
  );
}
