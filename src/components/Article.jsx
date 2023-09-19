import styles from "@/styles/Article.module.css";

export default function Article({ title, description, children }) {
  return (
    <article>
      <h2 className={styles.title}>
        <strong>{title}</strong>
      </h2>
      <div className={styles.description}>{description}</div>
      {children}
    </article>
  );
}
