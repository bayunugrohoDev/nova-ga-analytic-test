import Image from "next/image";

import styles from "@/styles/Card.module.css";

export default function Card({ avatar, title, description }) {
  return (
    <div className={styles.card}>
      <Image src={avatar} alt={title} className={styles.avatar} />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}
