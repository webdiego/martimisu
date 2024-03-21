import type { Metadata } from "next";
import {
  nanum_Pen_Script,
  slackside_One,
  single_Day,
  just_Me_Again_Down_Here,
  truculenta,
  gaegu,
  grandstander,
  gochi_Hand,
} from "@/app/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gaegu.className}`}>{children}</body>
    </html>
  );
}
