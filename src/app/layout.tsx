import { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
