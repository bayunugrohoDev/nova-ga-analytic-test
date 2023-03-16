import Image from "next/image";

import Article from "./Article";
import Button from "./Button";

import footerImage from "../../public/footer.png";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section id="join" className={styles.section}>
        <Image src={footerImage} alt="Footer image" priority />
        <Article
          title="Convinced yet?"
          description="Fill the form to reserve your username and get the early access to our app."
        >
          <Button>Join waitlist</Button>
        </Article>
      </section>
      <div className={styles.links}>
        <nav>
          <a href="/terms-and-conditions" className={styles.link}>
            Terms and Conditions
          </a>
          <a href="/faq" className={styles.link}>
            FAQ
          </a>
          <a href="/privacy" className={styles.link}>
            Privacy
          </a>
        </nav>
        <a href="mailto:contact@novacircle.com" className={styles.link}>
          Contact
        </a>
        <a
          href="https://instagram.com"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/instagram.svg" alt="Instagram handle" />
        </a>
        <a
          href="https://tiktok.com"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/tiktok.svg" alt="TikTok handle" />
        </a>
        <a
          href="https://twitter.com"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/twitter.svg" alt="Twitter handle" />
        </a>
      </div>
    </footer>
  );
}
