
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import './globals.css'
import {UsuarioProvider} from './Context/UsuarioProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">    
      <UsuarioProvider>  
      <body className={inter.className}>{children}</body>
      </UsuarioProvider> 
    </html>
  )
}