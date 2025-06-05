import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Raybit Menu",
  description: "Generate menu on the go",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script googleMapsApiKey="AIzaSyCfdv9Fo_Mxst5ASKrWXGh74YTskTlsHZ4" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
