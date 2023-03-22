import Image from "next/image";
import Link from "next/link";

import Article from "./Article";
import WaitlistForm from "./WaitlistForm";

import footerImage from "../../public/footer.png";
import instagramImage from "../../public/instagram.svg";
import facebookImage from "../../public/facebook.svg";
import tiktokImage from "../../public/tiktok.svg";
import twitterImage from "../../public/twitter.svg";
import youtubeImage from "../../public/youtube.svg";
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
          <WaitlistForm />
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
          href="https://www.instagram.com/novacircleofficial"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={instagramImage} alt="Instagram handle" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100090644082832"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={facebookImage} alt="Facebook handle" />
        </a>
        <a
          href="https://www.tiktok.com/@novacircleofficial"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={tiktokImage} alt="TikTok handle" />
        </a>
        <a
          href="https://twitter.com/NovaCircleapp"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={twitterImage} alt="Twitter handle" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCeYlsxCxJwsjGB3aaj3OjrA"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={youtubeImage} alt="Youtube handle" />
        </a>
      </div>
    </footer>
  );
}
