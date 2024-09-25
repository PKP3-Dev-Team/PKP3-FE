import Image from "next/image";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { OrganizationGrid } from "./components/organization-grid/OrganizationGrid";
import { organizations } from "@/public/constants";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative">
        <Header />
        <div className="relative">
          <Image
            src="/editedIMG_0385.jpeg"
            alt="pkp3 event"
            layout="responsive"
            width={800}
            height={600}
            // sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="absolute bottom-4 right-4 bg-white bg-opacity-70 p-6 rounded-lg text-2xl">
            "Palliative care is for everyone."
          </div>
        </div>
      </div>
      <div className="text-justify px-60 py-8 flex-grow overflow-y-auto text-xl">
        <div>
          Persatuan Kerjasama Paliatif Pulau Pinang (PKP3) was established in
          April 2023 as a platform for palliative care providers in Penang to
          come together to promote holistic care for patients, as well as to
          improve and support care providers via education and research. We also
          aim to advocate about issues related to palliative care.
        </div>
        <div className="grid grid-cols-2 gap-8 py-8">
          <Image
            src="/palliative care 1.png"
            alt="Palliative Care Stock Image 1"
            height={400}
            width={400}
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            src="/palliative care 2.png"
            alt="Palliative Care Stock Image 2"
            height={400}
            width={400}
            style={{ width: "100%", height: "auto" }}
          />
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
          <Image
            src="/palliative care 3.png"
            alt="Palliative Care Stock Image 3"
            height={400}
            width={400}
            style={{ width: "100%", height: "auto" }}
          />
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
              href="Referral Form.pdf"
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
