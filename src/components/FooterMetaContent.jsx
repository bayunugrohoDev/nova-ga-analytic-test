import React from "react";
import Article from "./Article";
import Image from "next/image";
import footerImage from "../../public/footer-meta.png";
import rateOnAppStore from "../../public/rate-on-app-store.svg";

import styles from "@/styles/Footer.module.css";

import badgeAppleStore from "../../public/badge-apple-store-download.svg";
import badgeGooglePlay from "../../public/badge-google-play-download.svg";

function FooterContent({ handleClickAppStore, handleClickGooglePlay }) {
  return (
    <section
      id="join"
      className={`${styles.section} ${styles.sectionForFooterMeta}`}
    >
      <Image
        className={styles.imageArticleFooter}
        src={footerImage}
        width={358}
        height="auto"
        alt="Footer image"
      />
      <Article
        title="Get our app"
        description={
          <>
            <p>
              Nova Circle is in beta phase. Based on feedback from our
              community, we will improve on the things you already enjoy, build
              missing functionalities, and alleviate pain points. If you have
              any feedback or suggestions for improvements, shoot us an email at{" "}
              <a href="mailto:hello@novacircle.com">hello@novacircle.com</a>.
            </p>
            <div className={styles.badges}>
              <p className={styles.header}>
                <strong>Download our app</strong>
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
            <div>
              <Image className={styles.rating} src={rateOnAppStore} alt="" />
            </div>
          </>
        }
      ></Article>
    </section>
  );
}

export default FooterContent;
