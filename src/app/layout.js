import { inter } from './fonts';
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from "./provider";
import Navbar from '@/components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import Notification from './notification';

export const metadata = {
  title: "D~Funding",
  description: "A DApp to demonstrate transperancy of Blockchain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Notification />
          </Providers>
      </body>
    </html>
  );
}
