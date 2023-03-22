import { useEffect, useState } from "react";

import styles from "@/styles/Snackbar.module.css";

export default function Snackbar({ message = null, type = "success" }) {
  const [snackbarClass, setSnackbarClass] = useState("");

  useEffect(() => {
    if (message && styles[type]) {
      setSnackbarClass(styles[type]);
      setTimeout(() => {
        setSnackbarClass("");
      }, 6000); // Should we want to make timeout configurable in the future, we'd need to update the CSS dynamically
    }
  }, [message, type]);

  return <div className={`${styles.snackbar} ${snackbarClass}`}>{message}</div>;
}
