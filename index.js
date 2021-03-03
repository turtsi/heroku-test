const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'))

let customers = [
  { id: 1, name: 'YkäCS' },
  { id: 2, name: 'RottaCS' },
]

// HTTP GET http://localhost:8080/api/customers
app.get('/api/customers', (req, res) => {
  res.send(customers)
})

app.listen(port, () => {
  console.log(`Example app listening ap http://localhost:${port}`)
})
