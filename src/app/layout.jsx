import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import HomeHeader from './components/HomeHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Google Next Js Clone',
  description:
    'An open-source Google clone built with Next Js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
