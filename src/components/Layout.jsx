import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "./Header";
import Footer from "./Footer";
import googleAnalyticsService from "@/core/services/googleAnalyticsService";
import { useEffect } from "react";
import { useRouter } from "next/router";

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
  const router = useRouter() 
  const currentPath = router.pathname.replace(/^\/+/, ''); 
  
  useEffect(() => {
    const url = document.location.pathname;
    googleAnalyticsService.trackPageView(url);
  }, []);


  return (
    <div className={`layout ${currentPath} ${inter.variable} ${areainktrap.variable}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
