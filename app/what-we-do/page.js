"use client";
import { IKImage } from "imagekitio-next";
import { Footer } from "../components/footer/Footer";
import { Gallery } from "../components/gallery/Gallery";
import { Header } from "../components/header/Header";

import { images } from "@/public/constants";
import styles from "../page.module.css";
import Image from "next/image";

export default function WhatWeDo() {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  return (
    <main className="min-h-screen flex flex-col">
      <Header
        urlEndpoint={urlEndpoint}
        path="/images/banner/(updated dimensions) pkp3 website banners-09.jpg"
        alt="pkp3event"
      />
      <div className="flex-grow overflow-y-auto">
        <div className={styles.main_content}>
          <div>
            While palliative care is yet to be fully integrated into the
            Malaysian healthcare system, the Persatuan Kerjasama Paliatif Pulau
            Pinang (PKP3) is making significant strides in supporting its
            integration into the daily patient experience in Penang.{" "}
          </div>
          {/* <div className="relative w-full max-w-4xl mx-auto aspect-video md:h-[30vh] lg:h-[40vh] xl:h-[50vh]"> */}
          <div className="relative w-full max-w-4xl mx-auto aspect-video ">
            <div className="absolute flex inset-0">
              {/* <IKImage
                urlEndpoint={urlEndpoint}
                path="what-we-do/what-we-do-1"
                alt="Activity Image"
                fill
                className="object-contain max-w-full max-h-full"
              /> */}
              <Image
                src="/images/what-we-do/what-we-do-1.png"
                alt="Group Photo"
                fill
                className="object-contain max-w-full max-h-full"
              />
            </div>
          </div>
          <div>
            This progress, achieved through collaboration in education,
            research, and advocacy, gives us hope for the future of palliative
            care.
          </div>
          <div className="py-4">
            Since its inception in 2023, PKP3 has:
            <ol className="grid pt-2 list-decimal px-8 text-justify font-medium lg:font-semibold lg:pt-6 lg:grid-cols-2 lg:list-inside xl:py-10">
              <li
                className={`${styles.pkp3_achievement_items} lg:bg-[#01002f] lg:text-white`}>
                Organised the World Hospice and Palliative Care Day celebrations
                to raise awareness of palliative care at the Penang Botanic
                Gardens in October 2023.
              </li>
              <li className={styles.pkp3_achievement_items}>
                Led efforts in updating the common referral form for hospice and
                palliative care services in Penang, to ease the referral process
                and increase access to available services.
              </li>
              <li className={styles.pkp3_achievement_items}>
                Provided the collaboration platform to develop a
                cross-institution fellowship training programme for palliative
                care nursing.
              </li>
              <li
                className={`${styles.pkp3_achievement_items} lg:bg-[#01002f] lg:text-white`}>
                Co-organised with the Malaysian Hospice and Palliative Care
                Council, the World Hospice and Palliative Care Day 2024 will be
                held at the Polo Ground in Penang in October 2024. This is a
                national event advocating palliative care.
              </li>
            </ol>
          </div>
          <div className="grid grid-cols-1 gap-8 h-[100vh] mb-8 sm:grid-cols-2 sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
            <div className="relative">
              {/* <IKImage
                urlEndpoint={urlEndpoint}
                path="brochure/brochure1.JPG"
                alt="Activity Image"
                fill
                className="object-contain max-h-full"
              /> */}
              <Image
                src="/images/brochure/brochure1.JPG"
                alt="World Hospice and Palliative Care Day 2024 Brochure 1"
                fill
                className="object-contain max-h-full"
              />
            </div>
            <div className="relative">
              {/* <IKImage
                urlEndpoint={urlEndpoint}
                path="brochure/brochure2.JPG"
                alt="Activity Image"
                fill
                className="object-contain max-h-full"
              />
               */}
              <Image
                src="/images/brochure/brochure2.JPG"
                alt="World Hospice and Palliative Care Day 2024 Brochure 2"
                fill
                className="object-contain max-h-full"
              />
            </div>
          </div>
          <div>
            Going forward, the Persatuan Kerjasama Paliatif Pulau Pinang aims to
            continue developing the necessary attitudes, knowledge, and skills
            in palliative care and improve the availability of this approach in
            healthcare so that people suffering from serious illness can
            continue to receive treatments that focus on their comfort and
            quality of life and mitigate avoidable health-related suffering. 
          </div>
          <div className="pt-6">
            <Gallery urlEndpoint={urlEndpoint} images={images} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
