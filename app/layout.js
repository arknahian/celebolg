
import './globals.css'
import Menu from "./../ui/menu/Menu";



export const metadata = {
  title: 'Celebolg',
  description: 'Celebolg',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
          <Menu />
        
        <main>{children}</main>
      </body>
    </html >
  )
}
