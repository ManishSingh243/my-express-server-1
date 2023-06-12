const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Manish Singh')
})

app.listen(port, () => {
  console.log('Manish Singh')
})