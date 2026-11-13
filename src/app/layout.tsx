import type { Metadata } from "next";
import { Lora, Open_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-headline",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotel Vila Serena",
  description: "Onde a sofisticação urbana encontra a brisa constante do Atlântico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("font-sans", inter.variable)}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${lora.variable} ${openSans.variable} antialiased font-body text-earth-dark bg-sand`}>
        {children}
      </body>
    </html>
  );
}
