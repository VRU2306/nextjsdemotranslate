import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <LanguageSwitcher/>
  <Component {...pageProps} />
  

  </>
  
}
