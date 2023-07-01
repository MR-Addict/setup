import "./globals.css";

import Script from "next/script";
import { Navbar, Footer } from "@/components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      <Script async src="https://umami.mraddict.one/script.js" data-website-id="94d844bb-644b-43c9-887e-ce5933fc28ab" />
    </html>
  );
}
