import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { EB_Garamond, Plus_Jakarta_Sans } from "next/font/google";

const heading = EB_Garamond({ subsets: ["latin"], variable: "--font-eb-garamond", display: "swap" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta", display: "swap" });

export default function App({ Component, pageProps }: AppProps) {
  return <div className={`${heading.variable} ${body.variable}`}><Component {...pageProps} /></div>;
}
