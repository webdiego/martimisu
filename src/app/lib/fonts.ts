import {
  Inter,
  Truculenta,
  Just_Me_Again_Down_Here,
  Nanum_Pen_Script,
  Gochi_Hand,
  Grandstander,
  Single_Day,
  Slackside_One,
  Gaegu,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-inter",
  display: "swap",
});
export const grandstander = Grandstander({
  subsets: ["latin"],
});
export const gaegu = Gaegu({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const gochi_Hand = Gochi_Hand({
  subsets: ["latin"],
  weight: ["400"],
});
export const nanum_Pen_Script = Nanum_Pen_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nanum-mono",
  display: "swap",
});
export const slackside_One = Slackside_One({
  subsets: ["latin"],
  weight: ["400"],
});
export const just_Me_Again_Down_Here = Just_Me_Again_Down_Here({
  subsets: ["latin"],
  weight: ["400"],
});
export const single_Day = Single_Day({
  weight: ["400"],
});
export const truculenta = Truculenta({
  subsets: ["latin"],
  weight: ["400", "700"],
});
