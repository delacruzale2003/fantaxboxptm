import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Promoción Fanta x Xbox | PTM",
  description: "Participa en la promoción exclusiva de Fanta x Xbox realizando tus compras en Tambo, Listo u Oxxo. ¡Registra tu voucher y gana increíbles premios!",
  keywords: ["promoción fanta xbox", "ptm.pe", "fanta tambo", "fanta oxxo", "fanta listo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#5c3471]">
        {children}
      </body>
    </html>
  );
}