import { Roboto, Lora } from "next/font/google";

import Header from "./Header";
import Footer from "./Footer";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400"],
  display: "swap",
});

export default function Layout({ children }) {
  return (
    <div className={`${roboto.variable} ${lora.variable}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
