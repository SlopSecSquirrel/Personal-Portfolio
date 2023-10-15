import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "flowbite";

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
          <main>{children}</main>
      </body>
    </html>
  );
}
