import Head from 'next/head'
import { NextRequest } from 'next/server'

import { Component } from 'react'

import { Card } from '../../components/Card'

export default function Business({ name, children, pageTitle, ...props }) {
  console.log(props)
  const imgSrc = new URL(props.thumbnail, 'http://localhost:3000')

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Card>
        <div className="overflow-hidden rounded-t border-b border-gray-600 flex-shrink flex flex-row lg:border-0 lg:rounded-none lg:border-r lg:w-1/2 h-80">
          <img 
            className="w-full h-full max-w-full object-cover self-center"
            src={imgSrc}
          />
        </div>
        <div className="flex flex-col flex-1 w-full flex-grow p-6">
          <header>
            <div className="text-sm w-full flex flex-row justify-between mb-1 text-gray-800">
              <div className="flex justify-between w-100 flex-grow">
                  <div className="affiliation">Osage</div>
              </div>
              <div className="location">
                <a href="https://www.google.com/maps/place/36.1555805,-95.992789">
                  {props.address}
                </a>
              </div>
            </div>
            <a
              href={`/businesses/${props.slug}`}
              className="text-xl font-bold mb-1 pb-1 border-b block router-link-exact-active router-link-active"
            >
              {name}
            </a>
          </header>
          <div className="text-sm flex-grow mb-6 lg:mb-0">
            <div>{props.description}</div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end">
            <div className="text-sm flex flex-row align-baseline flex-grow mb-6 lg:mb-0">
              { props?.tags?.map( tag => (
                <span class={`box-border whitespace-no-wrap text-gray-500 pr-2 flex-end tag-${tag.name}`}>featured</span>
              ))}
            </div>
            <div className="text-sm flex flex-row align-baseline flex-end">
              <a
                href={props.url}
                title={props.url}
                target="_blank"
                className="button-knockout px-6 py-2 rounded inline-block"
              >Website</a>
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { name } = ctx.params
  const { attributes } = await import(`../../content/businesses/${name}.md`)

  return {
    props: {
      slug: name,
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