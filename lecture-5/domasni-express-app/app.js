const express = require('express')
const app = express()
const port = 3010


app.get('/history', (req, res) => {
  res.send('Ova e history page!')
})

app.get('/about', (req, res) => {
  res.send('Ova e about page!')
})

app.get('/profile', (req, res) => {
  res.send('Ova e profile page!')
})

app.post('/posts', (req, res) => {
    res.send('ova ruta postira')
  })
  
  app.put('/puts', (req, res) => {
    res.send('Ova ruta putsira!')
  })
  
  app.patch('/patchs', (req, res) => {
    res.send('Ova ruta patchira!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})