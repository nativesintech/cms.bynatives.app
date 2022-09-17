import matter from "gray-matter"
import fs from "fs"
import ReactMarkdown from "react-markdown"

export default function Page({ slug, frontmatter, content }) {
  return (
    <article className="page space-y-4 max-w-2xl mx-auto">
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown children={content} />
    </article>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params
  const text = fs.readFileSync(`./content/pages/${slug}.md`, "utf-8")

  let { data: frontmatter, content } = matter(text)
  frontmatter = JSON.parse(JSON.stringify(frontmatter))
  return {
    props: { slug, frontmatter, content },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3)

      return slug
    })
    return data
  })(require.context("../content/pages/", true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/${slug}`)

  return {
    paths,
    fallback: false,
  }
}
