import { attributes, react as HomeContent } from '../content/pages/home.md'
import Business from '../components/Business'

export async function getStaticProps({ ...ctx }) {
  // const { attributes } = await import(`../content/businesses/${slug}.md`)
  const markdownFiles = require.context('../content/businesses/', false, /\.md$/)
  const businesses = []

  for ( let path of markdownFiles.keys() ) {
    const file = path.substring(2)
    const { attributes } = await import(`../content/businesses/${file}`)
    attributes.slug = file.slice(0, -3)
    businesses.push(attributes)
  }

  return {
    props: { businesses }
  }
}


export default function Home({ businesses }) {
  let { title } = attributes
  console.log(businesses)
  return (
    <article>
      <div class="font-bold text-lg whitespace-normal inline-block w-full h-5">
        <span>{title}</span>
      </div>
      <div className="py-4 flex flex-col relative">
        { businesses?.map( b => (<Business {...b} />)) }
      </div>
    </article>
  )
}