import { Layout, Page } from '@vercel/examples-ui'
import Head from 'next/head'
import Link from 'next/link'
import FooterBar from '../components/FooterBar'
import NavBar from '../components/NavBar'
import Script from 'next/script'

function Home() {
  return (
    <>
    <Head>
      <title>Chat to AI: The Ultimate App to Chat with Artificial Intelligence</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="follow, index, max-snippet:-1, max-image-preview:standard" />
      <meta name="description" content="Chat To AI is the ultimate app for engaging in meaningful and intelligent conversations with artificial intelligence." key="desc" />
    </Head>
    <NavBar />
    <Page className="flex flex-col gap-12">
       <section className="container grid items-center justify-center gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-16 lg:pb-24">
        <div className="mx-auto flex flex-col items-start gap-4 lg:w-[52rem]">
          <h1 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl">
          Chat with the Power of AI
          </h1>
          <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8">
          The ultimate app for anyone who wants to engage in meaningful and intelligent conversations with AI technology.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/playground"
            target="_blank"
            rel="noreferrer"
            className="bg-blue active:bg-blueGray-50 text-white px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
          >
            Get Started
          </Link>
        </div>

        <div className="mx-auto flex flex-col items-start gap-4 lg:w-[52rem] mt-14">
          <h2 className="text-2xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl">
          The Go-To App for Conversing with AI
          </h2>
          <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8">
          Chat to AI is trusted by thousands of users worldwide who rely on its cutting-edge AI technology to power their conversations. Whether you're looking to improve your productivity, gain new insights, or simply engage in a fun and informative chat, Chat To AI is the go-to app for anyone who wants to chat with AI technology. With its intuitive interface, powerful AI algorithms, and world-class customer support, Chat To AI is the perfect tool for anyone who wants to unlock the full potential of AI.
          </p>
        </div>
        </section>

    </Page>
    <FooterBar />

<Script async src="https://www.googletagmanager.com/gtag/js?id=G-JS56BEBY30" />
<Script id="google-analytics" strategy="afterInteractive">
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JS56BEBY30');
  `}
</Script>
    </>
  )
}

Home.Layout = Layout

export default Home
