import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";

import styles from "@/styles/Header.module.css";

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src={currentPath == "/meta" ? "logo-sunset.svg" : "logo.svg"}
          width={120}
          height={86}
          alt="Nova Circle"
        />
      </Link>
    </header>
  );
}
