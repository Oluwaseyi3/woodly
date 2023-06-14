import {Montserrat} from "next/font/google"

import Navbar from "./components/navbar/Navbar"

import "./globals.css"
import ClientOnly from "./components/ClientOnly"
import Modal from "./components/modals/Modal"

export const metadata = {
  title: 'Woodly',
  description: 'An Event Booking Platform',
}

const font = Montserrat({
  subsets: ["latin"],
  weight: "400"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
         <Modal title='Hello World' isOpen/>
        <Navbar/>
        </ClientOnly>
        <div className="pb-20 pt-28">
          
        {children}
        </div>
        </body>
    </html>
  )
}
