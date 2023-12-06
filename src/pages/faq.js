import Head from "next/head";
import Navigation from "@/components/Navigation";
import Bulletin from "@/components/Bulletin";
import styles from "@/styles/Faq.module.css";

const FAQ_ITEMS = [
  {
    title: "What is Nova Circle and how does it work?",
    items: [
      "Nova Circle is a social platform offering a new way of getting inspired and sharing recommendations on experiences, ranging from restaurants and hotels to historical monuments. Nova Circle is a compilation of all the best spots at home and out of town curated by you, your friends, creators, and like-minded individuals globally.",
    ],
  },
  {
    title: "Can I provide feedback?",
    items: [
      "We would love to hear from you on how we can improve. Our product is built for you as a valued member of the Nova Circle community. We strive to make your experience on our platform as enjoyable as possible. Please send any feedback to hello@novacircle.com.",
    ],
  },
  {
    title:
      "Are there any costs associated with having an account at Nova Circle?",
    items: [
      "Nova Circle is free to use. In the future, access to certain premium features may require a one-time purchase or paid subscription.",
    ],
  },
  {
    title: "Who can access my content?",
    items: [
      "You decide what you share and with who. When uploading content, you choose whether you would like to publicly share your content, only with your circle or if you want to keep it completely private. This applies to each of your lists and recommendations.",
    ],
  },
  {
    title: "How does Nova Circle suggest spots?",
    items: [
      "Nova Circle is built to suggest the most relevant spots based on your personal preferences. By building out your circle with friends and creators that share your taste, Nova Circle can provide you with recommendations that are nearly perfectly aligned with your preferences. By leveraging data and artificial intelligence Nova Circle can also pair you with users that share similar interests, thereby providing suggestions from users that are not yet part of your circle.",
    ],
  },
  {
    title: "Who do I contact for support matters?",
    items: [
      "For support matters, please contact us at support@novacircle.com.",
    ],
  },
  {
    title: "How do I request data erasure?",
    items: [
      "If you would like to request erasure of data, please contact us at support@novacircle.com.",
    ],
  },
  {
    title: "What are the terms of usage?",
    items: [
      "You can find our Terms and Conditions at https://novacircle.com/terms-and-conditions.",
    ],
  },
  {
    title: "Do you have a Privacy Policy?",
    items: [
      "You can find our Privacy Policy at https://novacircle.com/privacy.",
    ],
  },
];

export default function FAQ() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nova Circle | FAQ</title>
        <meta
          name="description"
          content="Frequently asked questions about Nova Circle."
        />
        <meta property="og:title" content="Nova Circle | FAQ" />
        <meta
          property="og:description"
          content="Frequently asked questions about Nova Circle"
        />
      </Head>
      <Navigation />
      <main className={styles.main}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        {FAQ_ITEMS.map((faq, index) => (
          <Bulletin bulletin={faq} index={index} key={index} />
        ))}
      </main>
    </div>
  );
}
