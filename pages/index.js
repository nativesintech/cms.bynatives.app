import { attributes, react as HomeContent } from '../content/pages/home.md';

export default function Home() {
  let { title } = attributes;
  return (
      <article>
        <h1>{title}</h1>
        <HomeContent />
      </article>
  )
}