import type { AppProps } from "next/app";
// @ts-ignore - Next.js handles global CSS imports at build time.
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}