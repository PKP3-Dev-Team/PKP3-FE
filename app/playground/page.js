import { organizations } from "@/public/constants";
import { OrganizationGrid } from "../components/organization-grid/OrganizationGrid";
import styles from "./page.module.css";
export default function Playground() {
  return (
    <div className={styles.main_content}>
      <OrganizationGrid organizations={organizations} />
    </div>
  );
}
