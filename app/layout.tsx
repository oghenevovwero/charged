import local from "next/font/local";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Open_Sans({ subsets: ["latin"] });

const openSauceSans = local({
  src: [
    {
      path: "../public/fonts/OpenSauceSans-Black.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/OpenSauceSans-BlackItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/OpenSauceSans-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/OpenSauceSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/OpenSauceSans-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../public/fonts/OpenSauceSans-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/OpenSauceSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/OpenSauceSans-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/OpenSauceSans-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/OpenSauceSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/OpenSauceSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/OpenSauceSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/OpenSauceSans-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/OpenSauceSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-open-sauce-sans",
});

export const metadata: Metadata = {
  title: "Get charged now!",
  description: "Mobile EV charge that has your back",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${openSauceSans.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
