import React from "react";
import Article from "./Article";
import Image from "next/image";
import footerImage from "../../public/footer.png";

import styles from "@/styles/Footer.module.css";

import badgeAppleStore from "../../public/badge-apple-store-download.svg";
import badgeGooglePlay from "../../public/badge-google-play-download.svg";

function FooterContent({ handleClickAppStore, handleClickGooglePlay }) {
  return (
    <section id="join" className={`${styles.section} ${styles.sectionForFooterMeta}`}>
      <Image
        src={footerImage}
        width={358}
        height="auto"
        alt="Footer image"
      />
      <Article
        title="Get our app"
        description={
          <>
              Nova Circle is in beta phase. Based on feedback from our
              community, we will improve on the things you already enjoy, build
              missing functionalities, and alleviate pain points. If you have
              any feedback or suggestions for improvements, shoot us an email at{" "}
              <a href="mailto:hello@novacircle.com">hello@novacircle.com</a>.
              <div>
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
            </>
        }
      >
        {/* <WaitlistForm /> */}
      </Article>
    </section>
  );
}

export default FooterContent;
