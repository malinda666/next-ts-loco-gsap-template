import Head from 'next/head'

type Props = {
  children?: React.ReactNode

  // TODO after implementing header, footer
  // headerProps?: HeaderProps
  // footerProps?: FooterProps
}

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Rukmal Air Tours - Redesign</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      {/* TODO Header */}
      {/* <Header /> */}
      <main className="max-w-7xl relative mx-auto">{children}</main>
      {/* TODO Footer */}
      {/* <Footer /> */}
    </>
  )
}

export default PageLayout
