import styles from "@/styles/Article.module.css";

export default function Article({ title, description, children }) {
  return (
    <article>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.description}>{description}</div>
      {children}
    </article>
  );
}
