import { attributes } from "../content/pages/home.md"
import Business from "../components/Business"

export async function getStaticProps({ ...ctx }) {
  // const { attributes } = await import(`../content/businesses/${slug}.md`)
  const markdownFiles = require.context(
    "../content/businesses/",
    false,
    /\.md$/
  )
  const businesses = []

  for (let path of markdownFiles.keys()) {
    const file = path.substring(2)
    const { attributes } = await import(`../content/businesses/${file}`)
    attributes.slug = file.slice(0, -3)
    businesses.push(attributes)
  }

  return {
    props: { businesses },
  }
}

export default function Home({ businesses }) {
  let { title } = attributes
  return (
    <article>
      <div className="inline-block w-full h-5 text-lg font-bold whitespace-normal">
        <span>{title}</span>
      </div>
      <div className="relative flex flex-col py-4">
        {businesses?.map((b, i) => (
          <Business key={i} {...b} />
        ))}
      </div>
    </article>
  )
}
