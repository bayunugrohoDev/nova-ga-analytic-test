import Image from "next/image";
import Link from "next/link";

import Article from "./Article";
import Button from "./Button";

import footerImage from "../../public/footer.png";
import instagramImage from "../../public/instagram.svg";
import tiktokImage from "../../public/tiktok.svg";
import twitterImage from "../../public/twitter.svg";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section id="join" className={styles.section}>
        <Image src={footerImage} alt="Footer image" />
        <Article
          title="Convinced yet?"
          description="Fill the form to reserve your username and get the early access to our app."
        >
          <Button>Join waitlist</Button>
        </Article>
      </section>
      <div className={styles.links}>
        <nav>
          <Link href="/terms-and-conditions" className={styles.link}>
            Terms and Conditions
          </Link>
          <Link href="/faq" className={styles.link}>
            FAQ
          </Link>
          <Link href="/privacy" className={styles.link}>
            Privacy
          </Link>
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
          <Image src={instagramImage} alt="Instagram handle" />
        </a>
        <a
          href="https://tiktok.com"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={tiktokImage} alt="TikTok handle" />
        </a>
        <a
          href="https://twitter.com"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={twitterImage} alt="Twitter handle" />
        </a>
      </div>
    </footer>
  );
}
