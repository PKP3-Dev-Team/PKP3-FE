"use client"; // Add this at the top of the file

import React, { useState } from "react";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

import styles from "../page.module.css";
import { Gallery } from "../components/gallery/Gallery";
import { images } from "@/public/constants";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const SlideshowGallery = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className={styles.main_content}></div>

      <Footer />
    </main>
  );
};

export default SlideshowGallery;
