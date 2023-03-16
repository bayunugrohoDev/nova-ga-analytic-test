import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="Nova Circle" />
    </header>
  );
}
