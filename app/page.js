import Image from "next/image";
import { Banner } from "./components/banner/Banner";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { OrganizationGrid } from "./components/organization-grid/OrganizationGrid";
import { organizations } from "@/public/constants";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Banner
        src="/editedIMG_0385.jpeg"
        alt="pkp3 event"
        tagPosition={"bottom-4 right-4"}
      />

      <div className={styles.main_content}>
        <div>
          Persatuan Kerjasama Paliatif Pulau Pinang (PKP3) was established in
          April 2023 as a platform for palliative care providers in Penang to
          come together to promote holistic care for patients, as well as to
          improve and support care providers via education and research. We also
          aim to advocate about issues related to palliative care.
        </div>
        <div className="grid grid-cols-2 gap-8 py-8">
          <div className="relative">
            <Image
              src="/palliative care 1.png"
              alt="Palliative Care Stock Image 1"
              height={400}
              width={400}
              style={{ width: "100%", height: "auto" }}
            />
            <div className={styles.freepik}>Designed by Freepik</div>
          </div>
          <div className="relative">
            <Image
              src="/palliative care 2.png"
              alt="Palliative Care Stock Image 2"
              height={400}
              width={400}
              style={{ width: "100%", height: "auto" }}
            />
            <div className={styles.freepik}>Designed by Freepik</div>
          </div>
        </div>
        <div>
          <strong>The World Health Organisation (WHO)</strong> defines
          palliative care as “an approach that improves the quality of life of
          patients and their families facing the problem associated with
          life-threatening illness, through the prevention and relief of
          suffering by means of early identification and impeccable assessment
          and treatment of pain and other problems, physical, psychosocial and
          spiritual.”
        </div>
        <div className="py-8">
          <div className="relative">
            <Image
              src="/palliative care 3.png"
              alt="Palliative Care Stock Image 3"
              height={400}
              width={400}
              style={{ width: "100%", height: "auto" }}
            />
            <div className={styles.freepik}>Designed by Freepik</div>
          </div>
        </div>
        <div>
          <div>
            The following are links to the various Hospice and Palliative care
            organizations in Penang.
          </div>
          <OrganizationGrid organizations={organizations} />
          <div>
            Download the referral application form link{" "}
            <a
              className="font-bold"
              href="docs/Referral Form.pdf"
              target="_blank"
              rel="noopener noreferrer">
              here
            </a>
            .
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
