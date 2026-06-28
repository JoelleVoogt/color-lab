import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const anthropicMono = localFont({
  src: [
    {
      path: "./fonts/AnthropicMono-Italic-Web.woff2",
    },
    {
      path: "./fonts/AnthropicMono-Roman-Web.woff2",
    },
  ],
});

const anthropicSans = localFont({
  src: [
    {
      path: "./fonts/AnthropicSans-Italic-Web.woff2",
    },
    {
      path: "./fonts/AnthropicSans-Roman-Web.woff2",
    },
  ],
});

const anthropicSerif = localFont({
  src: [
    {
      path: "./fonts/AnthropicSerif-Italic-Web.woff2",
    },
    {
      path: "./fonts/AnthropicSerif-Roman-Web.woff2",
    },
  ],
});

export const metadata: Metadata = {
  title: "Color Lab",
  description:
    "Genereer vanuit één basiskleur een complete tintschaal van 100 tot 900, direct te plakken als Tailwind-thema. Consistente color tokens zonder rekenwerk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anthropicMono.className} ${anthropicSans.className} ${anthropicSerif.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
