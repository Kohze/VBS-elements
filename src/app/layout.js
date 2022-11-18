import '@/styles/globals.css'
import Head from './head'

export default function RootLayout({ children }) {
  return (
    <html>
      <Head />
      <body>{children}</body>
    </html>
  )
}
