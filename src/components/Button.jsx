import styles from "@/styles/Button.module.css";

export default function Button({
  type = "button",
  disabled = false,
  onClick = () => {},
  children,
}) {
  return (
    <button
      type={type}
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
