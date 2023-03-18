import { Page } from '@vercel/examples-ui'
import { Text } from '@vercel/examples-ui'
import { Chat } from '../../components/Chat'
import Head from 'next/head'
import NavBar from '../../components/NavBar'
import FooterBar from '../../components/FooterBar'

export default function index() {
  return (
    <>
    <Head>
      <title>Playground - Chat to AI</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="nofollow, noindex, max-snippet:-1, max-image-preview:standard" />
    </Head>
    <NavBar />
    <Page className="flex flex-col gap-12">
  <section className="flex flex-col gap-3">
    <Text variant="h2">Chat to AI:</Text>
    <div className="lg:w-2/3">
      <Chat />
    </div>
  </section>
  </Page>
  <FooterBar />
  </>
  )
}
