"use client";
import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ErrorBoundary } from "./components";
import { Provider } from "react-redux";
import { store } from "../store/store";
const inter = Inter({ subsets: ["latin", "cyrillic"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <Provider store={store}>{children}</Provider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
