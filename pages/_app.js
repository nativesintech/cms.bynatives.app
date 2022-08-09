import '../styles/globals.css'
import '../styles/reset.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-screen-sm lg:max-w-screen-lg mx-auto px-4 antialiased">
      <header>
        <nav className="flex py-6 bg-white items-center justify-between">
          <div className="flex items-center">
            <img src="https://businesses.bynatives.app/img/logo.e1e95d4b.svg" alt="Logo" className="flex-shrink-0 h-12 w-12" />
            <h1 className="hidden md:block text-xl text-gray-900 font-bold ml-3">
              Native Owned Businesses
            </h1>
          </div>
          <div className="space-x-2">
            <a href="/about" className=""> About </a>
            <a href="/admin" className=""> Login </a>
          </div>
        </nav>
      </header>
      <main className="flex flex-col text-left">
        <Component {...pageProps} />
      </main>
    </div>
  )
}