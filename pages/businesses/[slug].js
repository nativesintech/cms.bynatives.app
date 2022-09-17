import Head from "next/head"
import { NextRequest } from "next/server"

import { Component } from "react"

import Business from "../../components/Business"

export default function BusinessPage(props) {
  return (
    <>
      <Head>
        <title>{props.name}</title>
      </Head>
      <div className="py-4 flex flex-col">
        <Business {...props} />
      </div>
    </>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params
  const { attributes } = await import(`../../content/businesses/${slug}.md`)

  return {
    props: {
      slug,
      ...attributes,
      // frontmatter: data.data,
      // markdownBody: data.content,
    },
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
  })(require.context("../../content/businesses", true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/businesses/${slug}`)

  return {
    paths,
    fallback: false,
  }
}
