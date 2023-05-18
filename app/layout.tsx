import React from 'react'
import './globals.css'
import { FontFamilyProvider } from './context/fontFamily/provider'
import { ThemeProvider } from './context/ThemeContext/ThemeProvider'

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
      <ThemeProvider>
        <body>
          <FontFamilyProvider>{children}</FontFamilyProvider>
        </body>
      </ThemeProvider>
    </html>
  )
}
