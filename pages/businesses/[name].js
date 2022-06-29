import Head from 'next/head'
import { Component } from 'react'

export default function Business({ name, children, pageTitle, ...props }) {
  console.log(props)
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <article>
        <h1></h1>
        <ul>
          {name}
        </ul>
      </article>
    </>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { name } = ctx.params
  const { attributes } = await import(`../../content/businesses/${name}.md`)

  return {
    props: {
      ...attributes
      // frontmatter: data.data,
      // markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

      return slug
    })
    return data
  })(require.context('../../content/businesses', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/businesses/${slug}`)

  return {
    paths,
    fallback: false,
  }
}