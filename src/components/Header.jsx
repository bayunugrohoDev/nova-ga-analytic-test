import Image from "next/image";

import logoImage from "../../public/logo.svg";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={logoImage} alt="Nova Circle" priority />
    </header>
  );
}
