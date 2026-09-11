import type { Metadata } from "next";
import { Outfit, Qwigley } from "next/font/google";
import "./styles/base.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/expertise.css";
import "./styles/experience.css";
import "./styles/works.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/chat.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const qwigley = Qwigley({
  variable: "--font-qwigley",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Manoj Portfolio",
  description: "Visual communication designer portfolio landing page",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${qwigley.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
