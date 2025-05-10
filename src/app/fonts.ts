import {
  Rubik,
  Permanent_Marker as PermanentMarker,
  Creepster,
  Bangers,
} from "next/font/google";

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-rubik",
});

export const permanentMarker = PermanentMarker({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-marker",
});

export const creepster = Creepster({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-creepster",
});

export const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bangers",
});
