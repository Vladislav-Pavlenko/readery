import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./reset.css";
import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Readery",
  description: "//",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto}`}>
        <Header />
        {children}
        <footer>
          <MenuBar />
        </footer>
      </body>
    </html>
  );
}
