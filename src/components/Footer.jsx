import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import googleAnalyticsService from "@/core/services/googleAnalyticsService";
import { storeLink } from "@/core/constants/storeLink";

import styles from "@/styles/Footer.module.css";

import Article from "./Article";

import instagramImage from "../../public/instagram.svg";
import facebookImage from "../../public/facebook.svg";
import tiktokImage from "../../public/tiktok.svg";
import xImage from "../../public/x.svg";
import footerImage from "../../public/footer.png";
import youtubeImage from "../../public/youtube.svg";
import footerMetaImage from "../../public/footer-meta.png";
import badgeAppleStore from "../../public/badge-apple-store-download.svg";
import badgeGooglePlay from "../../public/badge-google-play-download.svg";
import rateOnAppStore from "../../public/rate-on-app-store.svg";

export default function Footer() {
  const router = useRouter();
  const currentPath = router.pathname;

  // handle action for click on 'Download our app' button
  const handleClickAppStore = () => {
    googleAnalyticsService.trackClickAppStore();
    const link = isMetaPage()
      ? storeLink.appStoreLinkForMetaPage
      : storeLink.appStoreLink;
    window.open(link, "_blank");
  };

  const handleClickGooglePlay = () => {
    googleAnalyticsService.trackClickGooglePlay();
    const link = isMetaPage()
      ? storeLink.googleAppLinkForMetaPage
      : storeLink.googleAppLink;
    window.open(link, "_blank");
  };

  const isMetaPage = () => {
    if (currentPath == "/meta") {
      return true;
    }
    return false;
  };

  const FOOTER_CONTENT = {
    image: {
      src: isMetaPage() ? footerMetaImage : footerImage,
    },
    article: {
      title: "Get our app",
      description: (
        <>
          <p>
            Nova Circle is in beta phase. Based on feedback from our community,
            we will improve on the things you already enjoy, build missing
            functionalities, and alleviate pain points. If you have any feedback
            or suggestions for improvements, shoot us an email at{" "}
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
      ),
    },
    footerMenu: [
      {
        name: "Terms & Conditions",
        link: "/terms-and-conditions",
        is_new_tab: false,
      },
      {
        name: "FAQ",
        link: "/faq",
        is_new_tab: false,
      },
      {
        name: "Privacy",
        link: "/privacy",
        is_new_tab: false,
      },
      {
        name: "Career",
        link: "https://novacircle.teamtailor.com/",
        is_new_tab: true,
      },
      {
        name: "Contact",
        link: "mailto:hello@novacircle.com",
        is_new_tab: false,
      },
    ],
    socialMediaList: [
      {
        imgSrc: instagramImage,
        alt: "Instagram logotype",
        link: "https://www.instagram.com/novacircleofficial",
      },
      {
        imgSrc: facebookImage,
        alt: "Facebook logotype",
        link: "https://www.facebook.com/novacircleofficial",
      },
      {
        imgSrc: tiktokImage,
        alt: "TikTok logotype",
        link: "https://www.tiktok.com/@novacircleofficial",
      },
      {
        imgSrc: xImage,
        alt: "X logotype",
        link: "https://x.com/NovaCircleapp",
      },
      {
        imgSrc: youtubeImage,
        alt: "Youtube logotype",
        link: "https://www.youtube.com/channel/UCeYlsxCxJwsjGB3aaj3OjrA",
      },
    ],
  };

  return (
    <footer className={styles.footer}>
      <section
        id="join"
        className={`${styles.section} ${styles.sectionForFooterMeta}`}
      >
        <Image
          className={styles.imageArticleFooter}
          src={FOOTER_CONTENT.image.src}
          width={358}
          height="auto"
          alt="Footer image"
        />
        <Article
          title={FOOTER_CONTENT.article.title}
          description={FOOTER_CONTENT.article.description}
        ></Article>
      </section>

      <d iv className={styles.links}>
        <div>
          <nav>
            {FOOTER_CONTENT.footerMenu.map((menu, idx) =>
              menu.is_new_tab ? (
                <Link
                  key={idx}
                  href={menu.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.link}
                >
                  {menu.name}
                </Link>
              ) : (
                <Link key={idx} href={menu.link} className={styles.link}>
                  {menu.name}
                </Link>
              )
            )}
          </nav>
        </div>
        <div>
          {FOOTER_CONTENT.socialMediaList.map((socialMedia, idx) => (
            <a
              key={idx}
              href={socialMedia.link}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={socialMedia.imgSrc} alt={socialMedia.alt} />
            </a>
          ))}
        </div>
      </d>
    </footer>
  );
}
