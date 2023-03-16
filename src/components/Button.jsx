import styles from "@/styles/Button.module.css";

export default function Button({ href = "#", onClick = () => {}, children }) {
  return (
    <a href={href} className={styles.button} onClick={onClick}>
      {children}
    </a>
  );
}
