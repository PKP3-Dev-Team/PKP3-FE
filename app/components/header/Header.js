import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./Navigation";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.header_div}>
      {/* should link homepage when clicking */}

      <Link href="." className={styles.organization}>
        <Image
          src={"/logo transparent bg.png"}
          alt={"PKP3 Logo"}
          width={80}
          height={80}
        />
        <b className={styles.organization_name}>
          Persatuan Kerjasama Paliatif Pulau Pinang
        </b>
      </Link>
      <Navigation />
    </div>
  );
};
