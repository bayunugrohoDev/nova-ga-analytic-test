import styles from "@/styles/Hero.module.css";
import { useRouter } from "next/router";

export default function Hero({ title, description, children }) {
  const router = useRouter();
  const currentPath = router.pathname.replace(/^\/+/, ''); 

  return (
    <div className={`hero-${styles[currentPath]}`}>
      <h1 className={`${styles.title} ${styles[currentPath]}`}>{title}</h1>
      <div className={`${styles.description} ${styles[currentPath]}`}>
        {description}
      </div>
      {children}
    </div>
  );
}
