import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export default function WhatWeDo() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow overflow-y-auto bg-red-300">What We Do</div>
      <Footer />
    </main>
  );
}
