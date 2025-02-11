import './globals.css'
import localFont from 'next/font/local'
import { ThemeProvider } from './theme-provider'
import Head from 'next/head'

const NeueMachina = localFont({
  src: [
    {
      path: '../../public/fonts/PPNeueMachina-InktrapLight.otf',
      weight: '300',
      style: 'light'
    },
    {
      path: '../../public/fonts/PPNeueMachina-InktrapRegular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/PPNeueMachina-InktrapUltrabold.otf',
      weight: '600',
      style: 'Ultrabold'
    }
  ],
})

export const metadata = {
  title: "Farouqk designs - Coming Soon.",
  description: 'This site is under construction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />      
      </Head>
      <body className={ `${NeueMachina.className} bg-gray-200	min-h-screen dark:bg-[#0d1117] `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          <main className='main'>{children}</main>
        </ThemeProvider>          
      </body>
    </html>
  )
}
