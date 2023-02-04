import { Session } from 'next-auth'
import { headers } from 'next/headers'
import './globals.css';
import Providers from './Providers';
export default async function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
       
          <Providers > 
            {children}
          </Providers>
      </body>
    </html>
  )
}