import Link from "next/link";
import { useRouter } from "next/router";

import styles from "@/styles/Navigation.module.css";

export default function Navigation({}) {
  const router = useRouter();

  return (
    <nav className={styles.navigation}>
      <Link href="/" className={styles.link}>
        « Back to Start page
      </Link>
      <div className={styles.linksContainer}>
        <Link
          href="/terms-and-conditions"
          className={`${styles.link} ${
            router.pathname === "/terms-and-conditions" ? styles.linkActive : ""
          }`}
        >
          Terms and Conditions
        </Link>
        <Link
          href="/faq"
          className={`${styles.link} ${
            router.pathname === "/faq" ? styles.linkActive : ""
          }`}
        >
          FAQ
        </Link>
        <Link
          href="/privacy"
          className={`${styles.link} ${
            router.pathname === "/privacy" ? styles.linkActive : ""
          }`}
        >
          Privacy
        </Link>
      </div>
    </nav>
  );
}
