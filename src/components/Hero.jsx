import styles from "@/styles/Hero.module.css";

export default function Hero({ title, description, children }) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.description}>{description}</div>
      {children}
    </div>
  );
}
