import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "flowbite";
import UnderConstruction from "./components/under_construction";
import Navbar from "./components/navbar";

export const metadata = {
  title: "Oliver Brooks' Portfolio 🍁",
  description:
    "A small résumé and CVE showcase application built with Next.JS and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={inter.className + "bg-white dark:bg-gray-900"}
      >
        <UnderConstruction></UnderConstruction>
        <Navbar></Navbar>
        
          <main>{children}</main>
      </body>
    </html>
  );
}
