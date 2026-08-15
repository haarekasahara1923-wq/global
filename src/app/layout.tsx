import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Educare Memorial School, Gohad, Bhind (MP)",
  description: "Official website of Global Educare Memorial School — In Front of Dr Ranaji, Kila Road, Old Bus Stand, Gohad, Bhind (MP). Admissions Open.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

