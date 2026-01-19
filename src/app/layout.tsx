import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cheeky Pete's | The Smooth Start for Little Legends",
  description: "Cheeky Pete's is the kids' cereal with no added sugar, 16g protein, and no artificial colors. The smooth start for little legends!",
  keywords: ["kids cereal", "healthy cereal", "no added sugar", "protein cereal", "children's breakfast"],
  openGraph: {
    title: "Cheeky Pete's | Kids Cereal",
    description: "The smooth start for little legends. No added sugar, 16g protein, made with love.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
