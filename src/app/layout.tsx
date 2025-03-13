import { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "São Marcos Odontologia",
  description: "Clínica especializada em odontologia",
  openGraph: {
    title: "São Marcos Odontologia",
    description: "Cliníca especializada em odontologia",
    url: "",
    siteName: "São Marcos Odontologia",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth scroll-pt-20 sm:scroll-pt-0">
      <Script src="https://kit.fontawesome.com/0809767475.js"></Script>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
