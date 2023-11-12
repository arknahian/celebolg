import { Inter } from 'next/font/google'
import './globals.css'
import Menu from "./../ui/menu/Menu";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Celebolg',
  description: 'Celebolg',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Menu />
        </header>
        
        <main>{children}</main>
      </body>
    </html >
  )
}
