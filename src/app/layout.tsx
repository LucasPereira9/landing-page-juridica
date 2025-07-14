import { Merriweather } from 'next/font/google'
import "./globals.css";

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
})

import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={merriweather.className}>
        {children}
      </body>
    </html>
  )
}
