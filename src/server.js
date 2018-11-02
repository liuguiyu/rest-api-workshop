let express = require('express')
let app = express()
let acronymRoute = require('./routes/acronym')
let docsRoute = require('./routes/docs')
let path = require('path')
let bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log('${new Date().toString()} => ${req.originalUrl}', req.body)
  next()
})

app.use(acronymRoute)
app.use(docsRoute)
app.use(express.static('public'))

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
  res.status(404).send('We think you are lost!')
})

// Handler for Error 500
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.sendFile(path.join(__dirname, '../public/500.html'))
})

app.listen(3000, '0.0.0.0', () => console.info('Server has started on port 3000'))