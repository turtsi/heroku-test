const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const server = app.listen(port, () => {
  console.log(`Example app listening ap http://localhost:${port}`)
})

app.use(express.static('public'))

let customers = [
  { id: 1, name: 'Jeps' },
  { id: 2, name: 'Heps' },
]

// HTTP GET http://localhost:8080/api/customers
app.get('/api/customers', (req, res) => {
  res.send(customers)
})
