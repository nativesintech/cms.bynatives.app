const axios = require("axios")
const fs = require("fs")
const YAML = require("json-to-pretty-yaml")

const url_languages =
  "https://native-land.ca/wp-content/themes/Native-Land-Theme/files/indigenousLanguages.json"

const pull_languages = async () => {
  const { data } = await axios.get(url_languages)

  const languages = data.features.map(({ properties }) => ({
    name: properties.Name,
    slug: properties.Slug,
    description: properties.description,
    color: properties.color,
  }))

  const out = { languages }

  fs.writeFileSync("./content/_data/languages.json", JSON.stringify(out))
}

const urlTerritories =
  "https://native-land.ca/wp-content/themes/Native-Land-Theme/files/indigenousTerritories.json"

const pullTerritories = async () => {
  const { data } = await axios.get(urlTerritories)

  const territories = data.features.map(({ properties }) => ({
    name: properties.Name,
    slug: properties.Slug,
    description: properties.description,
    color: properties.color,
  }))

  const out = { territories }

  fs.writeFileSync("./content/_data/territories.json", JSON.stringify(out))
}

pull_languages()
pullTerritories()
