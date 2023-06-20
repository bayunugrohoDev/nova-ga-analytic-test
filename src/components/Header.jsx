import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/logo.svg"
          width={84}
          height={50}
          alt="Nova Circle"
          priority
        />
      </Link>
    </header>
  );
}
