"use client";
import Image from "next/image";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const imagePaths = ["/image1.jfif", "/image2.jfif"];

export default () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <ScrollArea className="min-h-64 flex w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {imagePaths.map((imagePath) => (
            <Image
              src={imagePath}
              alt={"Photo"}
              className="aspect-[2/3] h-fit w-fit object-cover"
              width={200}
              height={300}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {/* <Image src="/image1.jfif" alt="hi" width={400} height={400} /> */}
      <div className="flex-grow overflow-y-auto bg-yellow-500">Some Images</div>
      <Footer />
    </main>
  );
};
