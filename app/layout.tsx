import React from 'react'
import './globals.css'
import { FontFamilyProvider } from './context/fontFamily/provider'

export const metadata = {
  title: 'Dictionary App',
  description: 'Improve your voculabory with our Dicitionary App'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <FontFamilyProvider>{children}</FontFamilyProvider>
      </body>
    </html>
  )
}
