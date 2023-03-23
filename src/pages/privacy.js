import Head from "next/head";

import Bulletin from "@/components/Bulletin";
import Navigation from "@/components/Navigation";
import styles from "@/styles/Privacy.module.css";

const PRIVACY_ITEMS = [
  {
    items: [
      "At Nova Circle, we are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Statement explains how we collect, use, and share your personal data when you use our mobile app.",
    ],
  },
  {
    title: "Data controller",
    items: [
      "The data controller for the processing of your personal data is Nova Circle.",
    ],
  },
  {
    title: "Personal data we collect",
    items: [
      "We collect personal data that you provide to us when you use the app, such as your name, email address, phone number, and payment information. We also collect data about your device and usage of the app, including your IP address, location, and device information.",
    ],
  },
  {
    title: "How we use your personal data",
    items: [
      "We use your personal data to provide and improve our services, including processing your bookings and reservations, providing personalized recommendations, and delivering marketing communications. We may also use your personal data for legal and regulatory compliance, fraud prevention, and to protect our rights and property.",
    ],
  },
  {
    title: "Legal basis for processing",
    items: [
      "We process your personal data based on your consent, as necessary for the performance of a contract with you, for our legitimate interests, or as required by law.",
    ],
  },
  {
    title: "Sharing of personal data",
    items: [
      "We may share your personal data with third-party service providers, such as airlines, hotels, and activity providers, to process your bookings and reservations. We may also share your personal data with law enforcement agencies or regulatory bodies as required by law.",
    ],
  },
  {
    title: "International transfers",
    items: [
      "Your personal data may be transferred to and processed in countries outside of the European Economic Area (EEA). We take steps to ensure that any transfers of your personal data comply with applicable data protection laws.",
    ],
  },
  {
    title: "Data retention",
    items: [
      "We retain your personal data for as long as necessary to provide our services to you, to comply with our legal and regulatory obligations, or as otherwise required by law.",
    ],
  },
  {
    title: "Your data protection rights",
    items: [
      "You have the right to access, rectify, or erase your personal data, as well as the right to object to or restrict processing of your personal data. You may also have the right to data portability and the right to withdraw your consent at any time. To exercise your data protection rights, please contact us using the information provided below.",
    ],
  },
  {
    title: "Contact us",
    items: [
      <span key={0}>
        If you have any questions or concerns about this Privacy Statement or
        our processing of your personal data, please contact us at{` `}
        <a href="mailto:privacy@novacircle.com">
          <strong>privacy@novacircle.com</strong>
        </a>
        .
      </span>,
    ],
  },
  {
    items: [
      "We may update this Privacy Statement from time to time. Any updates will be posted on our website and the updated version will be effective as of the date of posting.",
    ],
  },
];

export default function Privacy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nova Circle | Privacy</title>
        <meta
          name="description"
          content="Privacy statement that explains how we collect, use, and share your personal data when you use our mobile application"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className={styles.main}>
        <h1 className={styles.title}>Privacy</h1>
        {PRIVACY_ITEMS.map((item, index) => (
          <Bulletin bulletin={item} index={index} key={index} />
        ))}
      </main>
    </div>
  );
}
