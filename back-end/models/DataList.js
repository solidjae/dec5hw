const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
  artist: String,
  name: String,
  link: String,
})

const List = mongoose.model('Song', SongSchema)
module.exports = List