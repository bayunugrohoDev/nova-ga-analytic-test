import Head from "next/head";
import Navigation from "@/components/Navigation";
import Bulletin from "@/components/Bulletin";
import styles from "@/styles/Privacy.module.css";

const PRIVACY_ITEMS = [
  {
    title: "Introduction",
    items: [
      "When you use (the “User” or “you”) Nova Circle AB’s (“Nova”) Platform and the Services (as defined in Nova’s general terms and conditions (the ” Terms and Conditions”), you trust your personal data with Nova. In this privacy policy (the “Privacy Policy”), it is explained what types of personal data Nova collects, why Nova collects such data, and what Nova uses the personal data for – all in order for you to be able to exercise your rights.",
      "Nova processes and handles personal data in accordance with the Swedish Personal Data Act (SFS 1998:204) (Sw. personuppgiftslagen), regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation) and other applicable legislation for the protection of the personal integrity.",
    ],
  },
  {
    title: "Personal data which Nova collects ",
    items: [
      "Personal data is data or information which may be used to identify a specific individual (a natural person). The personal data which may be processed consists primarily of such data which you, directly or indirectly, provide Nova with, e.g., in connection with your application for registration of an account with Nova, and when using the mobile phone application (the ”Application”), the Nova website (the “Website”) or other services provided by Nova from time to time, or when you are in contact with Nova (the ” Services”). Such personal data is collected by Nova in order for Nova to be able to provide the abovementioned Services, and consists of, e.g., the information set forth below.",
      "Contact information etc.: When you choose to apply for registration of an account with Nova and/or when you use the Services, Nova will collect personal data such as your name, address, email address, mobile phone number, and other information you decide to provide due to the Services you intend to buy from Nova.",
      "Location information: When using certain Services, Nova collects information about your mobile phone’s geographic location, if you have allowed the Application to get access to location services.",
      "Payment details: When you are making a purchase in the Application or on the Website, you are asked to provide payment details, e.g., payment card information or other information relevant for the payment method you have selected.",
      "Technical information: In connection with you downloading the Application and/or using the Services, certain technical information or codes, such as your mobile phone’s unique device-ID or the model of the mobile phone, may be collected.",
    ],
  },
  {
    title: "Purposes of the processing of personal data",
    items: [
      "Nova registers and processes personal data primarily in order to provide, maintain and improve the Platform and the Services, to administrate the Platform and the Services, and to provide relevant customer service.",
      "Nova also processes personal data in order to discharge its duties under applicable laws, regulations and public authority decisions.",
      "Furthermore, personal data is processed in order to make possible offerings of certain other services and products, and to inform about offers and news from Nova and other partners of Nova.",
      "Processing of personal data is also carried out for statistics purposes and assessments, in order to develop and improve the Platform and the Services.",
      "Nova may also process your personal data in order to assist you when you are applying for registration of an account with Nova, and to provide further information about the Services, e.g., in case your application has been discontinued and the application process therefore has not been completed.",
    ],
  },
  {
    title: "Access to registered personal data",
    items: [
      "You have the right to receive information, free of charge at one occasion per calendar year, regarding your personal data which Nova has registered and is processing, in which way the registered and processed personal data has been collected, for what purposes the personal data has been processed and to which third parties the personal data may have been transferred (“Register Extract”). A request for a Register Extract must be in writing and signed by you. The request shall be sent to Valhallavägen 60, 114 27 Stockholm, Sweden or by email to Nova’s customer service (with a scanned copy of your written request attached).",
    ],
  },
  {
    title: "Right to rectification etc.",
    items: [
      "If you notice that personal data registered by Nova is inaccurate, inadequate or is processed in violation of the abovementioned purposes (see section 3 above), the Swedish Personal Data Act or any other relevant legislation, you may request that Nova corrects, blocks or deletes such registered personal data. A request regarding such correction, blocking or deleting shall be made via email to Nova’s customer service.",
    ],
  },
  {
    title: "Direct marketing",
    items: [
      "Nova and its partners may direct offers to you via, e.g., the Application, email and SMS. Marketing directly targeting you shall comply with applicable laws, regulations, codes of conduct and ethical guidelines. If you do not wish to receive marketing from Nova, you may contact Nova’s customer service or file such a request by sending a letter to Nova at Valhallavägen 60, 114 27 Stockholm, Sweden.",
    ],
  },
  {
    title: "Protection of personal data",
    items: [
      "Nova takes the issue of personal data security very seriously. To the extent Nova processes and stores your personal data, this is made on servers located within the EU. When your personal data is stored, Nova takes all necessary and reasonable technical and organisational measures to protect your personal data from unauthorised access, alteration or destruction. Access to information is strictly limited in various ways (e.g., by user authorisation and passwords being required and only assigned to employees who need access to such information to be able to perform their work duties). Other security measures include encryption, firewalls and physical limitations and restrictions when accessing buildings and files.",
    ],
  },
  {
    title: "Transfer of personal data to third parties etc.",
    items: [
      "Nova may share collected personal data in accordance with the Privacy Policy. Nova may share your personal data with companies within the same group of companies as Nova or with other companies which Nova co-operates with, for the abovementioned purposes (see section 3 above) both within and outside of the EU. If, and to the extent, Nova stores your personal data, such data is always stored at Nova or at companies within the same group of companies as Nova.",
    ],
  },
  {
    title: "Location information",
    items: [
      "Nova may collect, process and share your mobile phone’s exact geographic location in real time in order to provide certain of the Services. In order for such location-based information to be collected, you need to have enabled the function “allow location access” on your mobile phone. You may at any time revoke your consent to Nova collecting, processing and sharing such location-based information, by ceasing to use Services provided by Nova which require location- based information to function properly, and by switching off the function “allow location access” on your mobile phone.",
    ],
  },
  {
    title: "Cookies",
    items: [
      "Nova uses cookies to optimise the Services, to perform statistic evaluations, for analyses, and for marketing. A cookie is a text file stored on, e.g., your computer or mobile phone, which enables identification of your computer or mobile phone. Cookies help Nova to adjust, e.g., the Application and the Website to your demands as a user of the Services.",
      "There are two types of cookies; session cookies and permanent cookies. A session cookie is deleted automatically when a website or an application is shut down. A permanent cookie is stored on a computer or mobile phone during a certain time period. These two types of cookies may be placed on a website or in an application by different operators (first or third party) to be stored on your storage media (such as your computer’s hard drive or mobile phone’s memory). A first party cookie is placed by the operator of the website or application you visit or use. A third party cookie is placed by an operator who does not operate the website or the application you visit or use.",
      "If you do not accept that cookies are being stored on your computer or mobile phone, you can configure this in the web browser or in the application settings on your computer or mobile phone, and you can delete cookies which are stored on your storage media. Most web browsers and applications accept cookies by default, but there is also the option to not accept cookies or choose to display a warning before they are stored. If you do not accept cookies, this may impair the functionality of the Application, Website or other Services.",
    ],
  },
  {
    title: "Amendments to the Privacy Policy",
    items: [
      "Nova reserves the right to amend the Privacy Policy from time to time. If any amendments are made to the Privacy Policy which imply any amendment to the way Nova processes your personal data, Nova will inform you of such amendments via, e.g., the Website, the Application or by email. Should you continue to use the Services after having been informed of such amendments, you are deemed to have accepted the amendments. Nova recommends that you regularly read the Privacy Policy, for the most recent information on how Nova processes your personal data.",
    ],
  },
  {
    title: "Contact information",
    items: [
      "Should you have questions or comments regarding the Privacy Policy, please contact Nova’s customer service.\nEmail address: privacy@novacircle.com",
      "Questions will be dealt with promptly and will normally be answered within 3 days.",
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
          content="Privacy statement that explains how we collect, use, and share your personal data when you use our services"
        />
        <meta property="og:title" content="Nova Circle | Privacy" />
        <meta
          property="og:description"
          content="Privacy statement that explains how we collect, use, and share your personal data when you use our services"
        />
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
