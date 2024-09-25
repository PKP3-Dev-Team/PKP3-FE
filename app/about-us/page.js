import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow overflow-y-auto bg-orange-300">Who We Are</div>
      <Footer />
    </main>
  );
}
