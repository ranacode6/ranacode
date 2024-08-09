import type { Metadata } from 'next';
import { Inter, Jost } from 'next/font/google';
import './globals.css';
import Header from '@/components/Home/Header';
import Footer from '@/components/Home/Footer';
import { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ['latin'] });
const jost = Jost({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Custom Software Development',
  description: 'RanaCode is a Web Development Company',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(inter.className, jost.className)}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
