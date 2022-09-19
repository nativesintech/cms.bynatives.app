import { Card } from "./Card"

export default function Business({
  name,
  address,
  slug,
  description,
  links,
  tags,
  thumbnail,
}) {
  const imgSrc = thumbnail
    ? thumbnail.startsWith("http")
      ? thumbnail
      : `/${thumbnail}`
    : "/logo_black_white.svg"

  return (
    <Card>
      <div className="flex flex-row flex-shrink overflow-hidden border-b rounded-t border-slate-600 lg:border-0 lg:rounded-none lg:border-r lg:w-1/2">
        <img
          className="self-center object-scale-down w-full h-full max-w-full max-h-60 lg:max-h-80 lg:object-contain"
          src={imgSrc}
        />
      </div>
      <div className="flex flex-col flex-1 flex-grow w-full p-6">
        <header>
          <div className="flex flex-row justify-between w-full mb-1 text-sm text-slate-800">
            <div className="flex justify-between flex-grow w-100">
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
            className="block pb-1 mb-1 text-xl font-bold border-b router-link-exact-active router-link-active"
          >
            {name}
          </a>
        </header>
        <div className="h-30 lg:h-40">
          <p className="text-sm line-clamp-3 lg:line-clamp-8">{description}</p>
        </div>
        <div className="flex flex-row items-center pt-4 mt-auto">
          <div className="flex flex-row flex-grow text-sm lg:mb-0">
            {tags?.map((tag, i) => (
              <span
                key={i}
                className={`box-border whitespace-no-wrap text-gray-500 pr-2 flex-end tag-${tag}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-row text-sm flex-end">
            {links?.map((link, i) => (
              <a
                key={i}
                href={link.url}
                title={link.url}
                target="_blank"
                className="inline-block px-6 py-2 rounded button-knockout"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
