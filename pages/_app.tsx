import { AppProps } from "next/app";
import localFont from "next/font/local";
import { ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";

import "../styles/globals.css";

const windows95Font = localFont({
  src: "../public/fonts/w95fa.woff2",
  variable: "--w95fa",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={original}>
      <main className={`${windows95Font.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
