import Image from "next/image";

import styles from "@/styles/MessageBubble.module.css";

export default function MessageBubble({
  message,
  avatar,
  userName,
  avatarSize = 44,
}) {
  return (
    <div className={styles.messageBubble}>
      <p className={styles.message}>{message}</p>
      <div className={styles.userContainer}>
        <Image
          src={avatar}
          width={avatarSize}
          height={avatarSize}
          className={styles.avatar}
          alt={userName}
        />
        <span className={styles.username}>{userName}</span>
      </div>
    </div>
  );
}
