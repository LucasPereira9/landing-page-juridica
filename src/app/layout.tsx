import { EB_Garamond } from 'next/font/google'
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
});

import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={ebGaramond.className}>
        {children}
      </body>
    </html>
  )
}
