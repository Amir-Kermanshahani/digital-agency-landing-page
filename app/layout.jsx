import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Tribe",
  description:
    "A digital tribe of nomad professional; ready to take your business to the next level.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
