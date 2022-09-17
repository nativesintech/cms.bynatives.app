import "../styles/globals.css"
import "../styles/reset.css"

import Head from "next/head"
import Script from "next/script"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-screen-sm px-4 mx-auto antialiased lg:max-w-screen-lg">
      <Head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <header>
        <nav className="flex items-center justify-between py-6 bg-white">
          <a className="flex items-center" href="/">
            <img
              src="/logo_black_white.svg"
              alt="Logo"
              className="flex-shrink-0 w-12 h-12"
            />
            <h1 className="hidden ml-3 text-xl font-bold text-gray-900 md:block">
              Native Owned Businesses
            </h1>
          </a>
          <div className="space-x-2">
            <a href="/about" className="">
              About
            </a>
            <a href="/admin" className="">
              Login
            </a>
          </div>
        </nav>
      </header>
      <main className="flex flex-col text-left">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
