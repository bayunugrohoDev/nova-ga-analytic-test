import Navigation from "@/components/Navigation";
import Bulletin from "@/components/Bulletin";
import styles from "@/styles/Faq.module.css";

const FAQ_ITEMS = [
  {
    title: "What is Nova Circle and how does it work?",
    items: [
      "Nova Circle is a mobile app that helps you plan and organize your travel itinerary. It offers features such as flight booking, hotel reservations, and local activity suggestions, all in one convenient location.",
    ],
  },
  {
    title: "Is Nova Circle free to use?",
    items: [
      "Yes, Nova Circle is free to download and use. However, some premium features may require a paid subscription.",
    ],
  },
  {
    title: "Can I book flights and hotels through Nova Circle?",
    items: [
      "Yes, you can book flights and hotels through the app. Nova Circle offers a variety of travel options and helps you find the best deals.",
    ],
  },
  {
    title: "Does Nova Circle provide travel insurance?",
    items: [
      "No, Nova Circle does not offer travel insurance. However, we recommend that you purchase travel insurance separately for your trip.",
    ],
  },
  {
    title: "Can I customize my travel itinerary on Nova Circle?",
    items: [
      "Yes, you can customize your travel itinerary on Nova Circle. You can add or remove activities, change your flight or hotel reservations, and make other adjustments to your itinerary.",
    ],
  },
  {
    title: "Can I share my travel itinerary with others?",
    items: [
      "Yes, you can share your travel itinerary with others through the app. You can invite friends or family members to join your trip and share your plans with them.",
    ],
  },
  {
    title: "How does Nova Circle suggest local activities?",
    items: [
      "Nova Circle suggests local activities based on your location, interests, and other factors. It uses data and machine learning to provide personalized recommendations.",
    ],
  },
  {
    title: "Does Nova Circle offer customer support?",
    items: [
      "Yes, Nova Circle offers customer support through the app. You can contact our support team with any questions or issues you may have.",
    ],
  },
  {
    title:
      "What is the cancellation policy for bookings made through Nova Circle?",
    items: [
      "The cancellation policy for bookings made through Nova Circle may vary depending on the provider. You can view the cancellation policy for each booking before you confirm your reservation.",
    ],
  },
  {
    title: "Is Nova Circle available in multiple languages?",
    items: [
      "Yes, Nova Circle is available in multiple languages, including English, Spanish, French, German, and more. You can select your preferred language in the app settings.",
    ],
  },
];

export default function FAQ() {
  return (
    <div className={styles.container}>
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
