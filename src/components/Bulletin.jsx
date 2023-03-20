import { Fragment } from "react";
import styles from "@/styles/Bulletin.module.css";

function getItemNumber(bulletin, groupIndex, itemIndex) {
  if (bulletin?.items?.length > 1) {
    return `${groupIndex + 1}.${itemIndex + 1}. `;
  }

  if (!bulletin?.title) {
    return `${groupIndex + 1}. `;
  }

  return null;
}

export default function Bulletin({ bulletin, index }) {
  return (
    <Fragment>
      {bulletin.title && (
        <h2 className={styles.title}>
          {index + 1}. {bulletin.title}
        </h2>
      )}
      {bulletin?.items?.map((item, itemIndex) => (
        <p key={itemIndex} className={styles.description}>
          {getItemNumber(bulletin, index, itemIndex)} {item}
        </p>
      ))}
    </Fragment>
  );
}
