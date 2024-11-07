import { nanoid } from "nanoid"

let urlDatabase = {}

const createShortUrl = (originalUrl) => {
  const shortUrl = nanoid(8) // Gera um short URL com 8 caracteres
  urlDatabase[shortUrl] = originalUrl
  return shortUrl
}

const getOriginalUrl = (shortUrl) => {
  return urlDatabase[shortUrl]
}

export { createShortUrl, getOriginalUrl }
