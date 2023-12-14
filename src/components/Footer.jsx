import Image from "next/image";
import Link from "next/link";

import googleAnalyticsService from "@/core/services/googleAnalyticsService";

import { storeLink } from "@/core/constants/storeLink";

import Article from "./Article";
import footerImage from "../../public/footer.png";
import badgeAppleStore from "../../public/badge-apple-store-download.svg";
import badgeGooglePlay from "../../public/badge-google-play-download.svg";
import instagramImage from "../../public/instagram.svg";
import facebookImage from "../../public/facebook.svg";
import tiktokImage from "../../public/tiktok.svg";
import xImage from "../../public/x.svg";
import youtubeImage from "../../public/youtube.svg";

import styles from "@/styles/Footer.module.css";

export default function Footer() {
  // handle action for click on 'Download our app' button
  const handleClickAppStore = () => {
    googleAnalyticsService.trackClickAppStore();
    window.open(storeLink.appStoreLink, "_blank");
  };

  const handleClickGooglePlay = () => {
    googleAnalyticsService.trackClickGooglePlay();
    window.open(storeLink.googleAppLink, "_blank");
  };

  return (
    <footer className={styles.footer}>
      <section id="join" className={styles.section}>
        <Image src={footerImage} width={358} height="auto" alt="Footer image" />
        <Article
          title="Get our app"
          description={
            <>
              Nova Circle is in beta phase. Based on feedback from our
              community, we will improve on the things you already enjoy, build
              missing functionalities, and alleviate pain points. If you have
              any feedback or suggestions for improvements, shoot us an email at{" "}
              <a href="mailto:hello@novacircle.com">hello@novacircle.com</a>.
              <div className={styles.badges}>
                <p className={styles.header}>
                  <strong>Download our app. It's free</strong>
                </p>
                <a
                  href="#"
                  id="app-store"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleClickAppStore()}
                >
                  <Image
                    src={badgeAppleStore}
                    alt="Download on the App Store"
                    className={styles.badge}
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  id="google-play"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={badgeGooglePlay}
                    alt="Get it on Google Play"
                    className={styles.badge}
                    onClick={() => handleClickGooglePlay()}
                  />
                </a>
              </div>
            </>
          }
        >
          {/* <WaitlistForm /> */}
        </Article>
      </section>
      <div className={styles.links}>
        <div>
          <nav>
            <Link href="/terms-and-conditions" className={styles.link}>
              Terms & Conditions
            </Link>
            <Link href="/faq" className={styles.link}>
              FAQ
            </Link>
            <Link href="/privacy" className={styles.link}>
              Privacy
            </Link>
            <a
              href="https://novacircle.teamtailor.com/"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Career
            </a>
            <a href="mailto:hello@novacircle.com" className={styles.link}>
              Contact
            </a>
          </nav>
        </div>
        <div>
          <a
            href="https://www.instagram.com/novacircleofficial"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={instagramImage} alt="Instagram logotype" />
          </a>
          <a
            href="https://www.facebook.com/novacircleofficial"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={facebookImage} alt="Facebook logotype" />
          </a>
          <a
            href="https://www.tiktok.com/@novacircleofficial"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={tiktokImage} alt="TikTok logotype" />
          </a>
          <a
            href="https://x.com/NovaCircleapp"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={xImage} alt="X logotype" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCeYlsxCxJwsjGB3aaj3OjrA"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={youtubeImage} alt="Youtube logotype" />
          </a>
        </div>
      </div>
    </footer>
  );
}
