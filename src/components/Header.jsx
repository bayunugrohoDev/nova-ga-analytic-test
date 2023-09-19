import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/logo.svg" width={120} height={86} alt="Nova Circle" />
      </Link>
    </header>
  );
}
