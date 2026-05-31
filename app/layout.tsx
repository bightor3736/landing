import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bogue = localFont({
  src: [
    {
      path: "../public/fonts/BogueSlab-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/BogueSlab-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/BogueSlab-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hyperfix — the journal for your obsession",
  description:
    "Log the song on loop, the fic you've re-read six times, and the character who rearranged your brain. Count the days. Mourn it when it ends.",
  metadataBase: new URL("http://localhost:3000"),
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('hyperfix-theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bogue.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
