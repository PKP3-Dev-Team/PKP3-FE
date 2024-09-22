import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export default function ContactUs() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow overflow-y-auto bg-green-300">Contact Us</div>
      <Footer />
    </main>
  );
}
