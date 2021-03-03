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
let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
]

// HTTP GET http://localhost:8080/api/customers
app.get('/api/customers', (req, res) => {
  var str = JSON.stringify(customers, null, 2)
  res.send(customers)
})
// HTTP GET http://localhost:8080/api/locations
app.get('/api/locations', (req, res) => {
  var str = JSON.stringify(database, null, 2)
  res.type('application/json')
  res.send(str)
})
