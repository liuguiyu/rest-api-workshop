let mongoose = require('mongoose')

const server = 'localhost:27017'
const database = 'fencers'
const user = 'fencers'
const password = 'fencers'

//mongoose.connect('mongodb://${user}:${password}@${server}/${database}')
mongoose.connect('mongodb://fencers:fencers@localhost:27017/fencers')

let AcronymSchema = new mongoose.Schema({
  acronym: String,
  fullname: String
  }
)

module.exports = mongoose.model('acronym', AcronymSchema)