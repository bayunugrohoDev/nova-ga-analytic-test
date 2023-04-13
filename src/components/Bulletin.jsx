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

function getSubitemNumber(index, itemIndex, subitemIndex) {
  return `${index + 1}.${itemIndex + 1}.${subitemIndex + 1}.`;
}

export default function Bulletin({ bulletin, index }) {
  return (
    <Fragment>
      {bulletin.title && (
        <h2 className={styles.title}>
          {index + 1}. {bulletin.title}
        </h2>
      )}
      {bulletin?.items?.map((item, itemIndex) =>
        item?.subtitle ? (
          <>
            <h2 className={styles.subtitle}>
              {index + 1}.{itemIndex + 1} {item.subtitle}
            </h2>
            {item.subitems.map((subitem, subitemIndex) => (
              <div
                key={`${itemIndex}-${subitemIndex}`}
                className={styles.description}
              >
                <span>
                  {getSubitemNumber(index, itemIndex, subitemIndex)} {subitem}
                </span>
              </div>
            ))}
          </>
        ) : (
          <div key={itemIndex} className={styles.description}>
            <span>
              {getItemNumber(bulletin, index, itemIndex)}
              {item}
            </span>
          </div>
        )
      )}
    </Fragment>
  );
}
