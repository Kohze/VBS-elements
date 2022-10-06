import VBSIcon from '@/components/application-ui/elements/icons'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VBSIcon iconName="SwatchIcon" />
    </div>
  )
}