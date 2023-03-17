import Image from "next/image";
import Link from "next/link";

import logoImage from "../../public/logo.svg";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={logoImage} alt="Nova Circle" priority />
      </Link>
    </header>
  );
}
