import styles from "@/styles/Article.module.css";
import { useRouter } from "next/router";

export default function Article({ title, description, children }) {
  const router = useRouter();
  const currentPath = router.pathname.replace(/^\/+/, ''); 

  return (
    <article>
      <h1 className={`${styles.title} ${styles[currentPath]}`}>{title}</h1>
      <div className={`${styles.description} ${styles[currentPath]}`}>{description}</div>
      {children}
    </article>
  );
}
