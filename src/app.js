import express from "express"
import compression from "compression"
import { createShortUrl, getOriginalUrl } from "./url.js" 

const app = express()

app.use(compression())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Esta resposta está comprimida!")
})

app.post("/api/shorten", (req, res) => {
  const { originalUrl } = req.body

  if (!originalUrl) {
    return res.status(400).json({ message: "URL original é obrigatória" })
  }

  const shortUrl = createShortUrl(originalUrl)
  return res.json({ originalUrl, shortUrl })
})

app.get("/:shortUrl", (req, res) => {
  const { shortUrl } = req.params
  const originalUrl = getOriginalUrl(shortUrl)

  if (!originalUrl) {
    return res.status(404).json({ message: "URL não encontrada" })
  }

  return res.redirect(originalUrl)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
