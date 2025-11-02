// src/lib/fonts.ts
import {
  Fredoka,
  Nunito,
  Barriecito,
  Rubik,
  Luckiest_Guy,
} from "next/font/google";

export const fredoka = Fredoka({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fredoka",
});
export const nunito = Nunito({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nunito",
});
export const barriecito = Barriecito({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barriecito",
});
export const rubik = Rubik({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik",
});
export const luckiestguy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luckiestguy",
});
