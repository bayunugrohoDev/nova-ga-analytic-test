import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/logo.png"
          width={150}
          height={72}
          alt="Nova Circle"
          priority
        />
      </Link>
    </header>
  );
}
