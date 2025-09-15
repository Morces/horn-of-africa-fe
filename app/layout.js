import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Horn of Africa Institute - Empowering Pastoralist Communities",
  description:
    "Horn of Africa Institute empowers pastoralist women and girls through evidence-based development programs, advocacy, and resilience building across the Horn of Africa region.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
