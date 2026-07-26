// Provide a minimal local AppProps type to avoid depending on next/app types
type AppProps = {
  Component: any;
  pageProps: any;
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
