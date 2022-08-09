import '../styles/globals.css'
import '../styles/reset.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-screen-sm lg:max-w-screen-lg mx-auto px-4 antialiased">
      <main className="flex flex-col text-left py-20">
        <Component {...pageProps} />
      </main>
    </div>
  )
}