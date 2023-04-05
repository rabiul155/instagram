import Head from 'next/head'

import { Inter } from 'next/font/google'
import Image from 'next/image'
import img from '../Images/insta.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>

      <main>
        <div>
          this is main page
        </div>
        <Image
          src={img}
        ></Image>
      </main>

    </>
  )
}
