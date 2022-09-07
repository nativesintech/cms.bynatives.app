import { Card } from './Card'

export default function Business({ name, address, slug, description, links, tags, thumbnail }) {
  // const imgSrc = new URL(thumbnail, 'http://localhost:3000')

  return (<Card>
    <div className="overflow-hidden rounded-t border-b border-slate-600 flex-shrink flex flex-row lg:border-0 lg:rounded-none lg:border-r lg:w-1/2 h-80">
      <img 
        className="w-full h-full max-w-full object-cover self-center"
        src={thumbnail}
      />
    </div>
    <div className="flex flex-col flex-1 w-full flex-grow p-6">
      <header>
        <div className="text-sm w-full flex flex-row justify-between mb-1 text-slate-800">
          <div className="flex justify-between w-100 flex-grow">
            <div className="affiliation">Osage</div>
          </div>
          <div className="location">
            <a href="https://www.google.com/maps/place/36.1555805,-95.992789">
              {address}
            </a>
          </div>
        </div>
        <a
          href={`/businesses/${slug}`}
          className="text-xl font-bold mb-1 pb-1 border-b block router-link-exact-active router-link-active"
        >
          {name}
        </a>
      </header>
      <div className="text-sm flex-grow mb-6 lg:mb-0">
        <div>{description}</div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-end">
        <div className="text-sm flex flex-row align-baseline flex-grow mb-6 lg:mb-0">
            {tags?.map((tag, i) => (
              <span
                key={i}
              className={`box-border whitespace-no-wrap text-gray-500 pr-2 flex-end tag-${tag.name}`}
            >{tag}</span>
          ))}
        </div>
        <div className="text-sm flex flex-row align-baseline flex-end gap-3">
            {links?.map((link, i) => (
              <a
                key={i}
              href={link.url}
              title={link.url}
              target="_blank"
              className="button-knockout px-6 py-2 rounded inline-block"
            >{link.name}</a>
          ))}
        </div>
      </div>
    </div>
  </Card>)
}