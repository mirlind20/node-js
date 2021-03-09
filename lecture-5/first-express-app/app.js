const express = require('express')
const app = express()
const port = 3010

app.get('/hehe', (req, res) => {
  res.send('Ova e ruta hehe!')
})

app.get('/history', (req, res) => {
  res.send('Ova e history page!')
})

app.get('/about', (req, res) => {
  res.send('Ova e about page!')
})

app.get('/profile', (req, res) => {
  res.send('Ova e profile page!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})