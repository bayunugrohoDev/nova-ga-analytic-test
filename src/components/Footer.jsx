import Image from "next/image";
import Link from "next/link";

import googleAnalyticsService from "@/core/services/googleAnalyticsService";

import { storeLink } from "@/core/constants/storeLink";

import Article from "./Article";
import footerImage from "../../public/footer.png";
import footerImageForMeta from "../../public/footer-meta.png";

import badgeAppleStore from "../../public/badge-apple-store-download.svg";
import badgeGooglePlay from "../../public/badge-google-play-download.svg";
import instagramImage from "../../public/instagram.svg";
import facebookImage from "../../public/facebook.svg";
import tiktokImage from "../../public/tiktok.svg";
import xImage from "../../public/x.svg";
import youtubeImage from "../../public/youtube.svg";

import styles from "@/styles/Footer.module.css";
import { useRouter } from "next/router";
import FooterMetaContent from "./FooterMetaContent";
import FooterContent from "./FooterContent";

export default function Footer() {
  const router = useRouter();
  const currentPath = router.pathname;

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
      {currentPath == "/meta" ? (
        <FooterMetaContent
          handleClickAppStore={handleClickAppStore}
          handleClickGooglePlay={handleClickGooglePlay}
        />
      ) : (
        <FooterContent
          handleClickAppStore={handleClickAppStore}
          handleClickGooglePlay={handleClickGooglePlay}
        />
      )}

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
