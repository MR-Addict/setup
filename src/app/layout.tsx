import "./globals.css";
import setMetadata from "@/lib/utils/setMetadata";

import Footer from "@/components/Footer/Footer";

export const metadata = setMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
