let nanoid

;(async () => {
  nanoid = (await import("nanoid")).nanoid
})()

let urlDatabase = {}

const createShortUrl = (originalUrl) => {
  if (!nanoid) {
    throw new Error("nanoid não carregado corretamente.")
  }

  const shortUrl = nanoid(8) // Gera um short URL com 8 caracteres
  urlDatabase[shortUrl] = originalUrl
  return shortUrl
}

const getOriginalUrl = (shortUrl) => {
  return urlDatabase[shortUrl]
}

module.exports = { createShortUrl, getOriginalUrl }
