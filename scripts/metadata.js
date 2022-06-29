const axios = require('axios')
const fs = require('fs')
const YAML = require('json-to-pretty-yaml')

const url_languages = 'https://native-land.ca/wp-content/themes/Native-Land-Theme/files/indigenousLanguages.json'


const pull_languages = async () => {
  const { data } = await axios.get(url_languages)

  const out = data.features.map(({ properties }) => ({
    name: properties.Name,
    slug: properties.Slug,
    description: properties.description,
    color: properties.color
  }))

  console.log(out)

  fs.writeFileSync('./content/languages.json', JSON.stringify(out))
}

pull_languages()