import React from "react";
import Article from "./Article";
import Image from "next/image";
import footerImageForMeta from "../../public/footer-meta.png";
import rateOnAppStore from "../../public/rate-on-app-store.svg";

import styles from "@/styles/Footer.module.css";

import badgeAppleStore from "../../public/badge-apple-store-download.svg";
import badgeGooglePlay from "../../public/badge-google-play-download.svg";

function FooterMetaContent({ handleClickAppStore, handleClickGooglePlay }) {
  return (
    <section id="join" className={`${styles.section} ${styles.sectionForFooterMeta}`}>
      <Image
        src={footerImageForMeta}
        width={358}
        height="auto"
        alt="Footer image"
        className={styles.imageArticleFooter}
      />
      <Article
        title="Get it now"
        description={
          <>
            <p className={styles.header}>
              <strong>Download our app. it`s free</strong>
            </p>
            <div className={styles.badges}>
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
            <Image className={styles.wFull} src={rateOnAppStore}  alt="" />
          </>
        }
      >
        {/* <WaitlistForm /> */}
      </Article>
    </section>
  );
}

export default FooterMetaContent;
