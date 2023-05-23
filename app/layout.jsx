import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './Components/Header'
import Footer from './Components/Footer'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'The Transition | Home',
  description: 'The ultimate conference',
  keywords:
    'Conference, tech, transition',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
