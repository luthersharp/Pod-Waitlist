import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { url } from "inspector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://podsynk.com"),
  keywords: [
    "find podcast guests",
    "podcast guests",
    "get booked on podcasts",
    "Podcasts guests",
    "novel marketing podcast",
    "How to be a great podcast guest",
    "Podcust guestcom",
    "Looking for podcast co host",
    "Podcast directory search",
    "Podcast guest directory",
    "Podcast guest finder",
    "Podcast guest search",
    "Podcast guests network",
    "Podcast guestscom",
    "Podcasts looking for guests",
    "The perfect guests",
    "Guest podcast",
    "How to find podcast guests",
    "Be a great podcast guest",
    "Be a podcast guest",
    "Become a podcast guest",
    "Find podcast guest",
    "Find podcasts to be guest on",
    "How can I become a podcast guest",
    "How to be guest for podcast",
    "How to find podcast guest",
    "How to get podcast guest",
    "How to find guests for you podcasts",
    "how to find podcasts to be a guest on",
    "how to create a podcast for free",
    "best podcast recording software",
    "best podcasting software",
    "best software for podcasting",
    "grow podcast",
    "best podcast gear",
    "how much podcast sponsors pay",
    "podcast sponsorship pricing",
    "podcast sponsorship rates",
    "how to be a good podcast host",
    "booking podcast guesting",
    "podcast guest booking service",
    "podcast branding",
    "podcast brand"
  ],
  title:{
    default: 'PodSynk',
    template: `$s | PodSynk`
  },
  openGraph:{
    description: 'find podcast guests /hosts, Message them, book them. we make it easy'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
