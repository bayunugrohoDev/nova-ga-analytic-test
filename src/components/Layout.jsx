import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "./Header";
import Footer from "./Footer";
import { initReactGA, trackPageView } from "@/core/services/googleAnalytics";
import { useEffect } from "react";

const areainktrap = localFont({
  src: [
    {
      path: "../../public/fonts/AreaInktrap-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/AreaInktrap-Semibold.woff2",
      weight: "600",
    },
    {
      path: "../../public/fonts/AreaInktrap-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-areainktrap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function Layout({ children }) {

  initReactGA();

  useEffect(() => {
    trackPageView();
  }, []);


  return (
    <div className={`${inter.variable} ${areainktrap.variable}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
