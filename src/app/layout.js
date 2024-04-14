import { inter } from './fonts';
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from "./provider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
