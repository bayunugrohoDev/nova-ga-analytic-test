import Navigation from "@/components/Navigation";
import Bulletin from "@/components/Bulletin";
import styles from "@/styles/TermsAndConditions.module.css";

const TERMS_CONDITIONS = [
  {
    title: "General",
    items: [
      'This website is owned and operated by Nova Circle AB ("we", "us", "our"). The use of this website is subject to the following terms and conditions:',
    ],
  },
  {
    title: "Use of Website",
    items: [
      "You must be at least 18 years of age to use this website.",
      "You may only use this website for lawful purposes and in accordance with these Terms of Use.",
      "You agree not to use this website in any way that could damage, disable, overburden, or impair the website, or interfere with any other party's use and enjoyment of the website.",
      "You agree not to obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the website.",
    ],
  },
  {
    title: "User Content",
    items: [
      'Any content that you upload or submit to the website, including but not limited to text, images, videos, and audio, is referred to as "User Content".',
      "You are solely responsible for your User Content. By uploading or submitting User Content, you represent and warrant that you have the right to do so and that the User Content does not violate any third-party rights, including intellectual property rights and privacy rights.",
      "We reserve the right to remove any User Content that we believe, in our sole discretion, violates these Terms of Use or is otherwise objectionable.",
    ],
  },
  {
    title: "Intellectual Property",
    items: [
      "All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Nova Circle AB or its licensors and is protected by copyright and other intellectual property laws.",
      "You may not copy, modify, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any content obtained from this website without the prior written permission of Nova Circle AB.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    items: [
      'This website is provided "as is" without any representations or warranties, express or implied. Nova Circle AB makes no representations or warranties in relation to this website or the information and materials provided on this website.',
      "Nova Circle AB does not warrant that this website will be constantly available, or available at all, or that the information on this website is complete, true, accurate, or non-misleading.",
    ],
  },
  {
    title: "Limitation of Liability",
    items: [
      "To the extent permitted by applicable law, Nova Circle AB shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use this website, including but not limited to damages for loss of profits, use, data, or other intangible losses.",
      "Nothing in these Terms of Use shall exclude or limit Nova Circle AB's liability for death or personal injury caused by its negligence, fraudulent misrepresentation, or any other liability that cannot be excluded or limited under applicable law.",
    ],
  },
  {
    title: "Indemnification",
    items: [
      "You agree to indemnify and hold Nova Circle AB, its affiliates, officers, agents, and other partners and employees, harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of this website, your violation of these Terms of Use, or your violation of any rights of another.",
    ],
  },
  {
    title: "Governing Law",
    items: [
      "These Terms of Use shall be governed by and construed in accordance with the laws of [jurisdiction], without giving effect to any principles of conflicts of law.",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>
        <h1 className={styles.title}>Terms and Conditions</h1>
        <p className={styles.description}>
          Welcome to our website. By accessing or using this website, you agree
          to be bound by the following terms and conditions (&quot;Terms of
          Use&quot;):
        </p>

        {TERMS_CONDITIONS.map((termCondition, index) => (
          <Bulletin bulletin={termCondition} index={index} key={index} />
        ))}
      </main>
    </div>
  );
}
