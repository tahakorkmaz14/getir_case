const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecordsSchema = new Schema({
  createdAt    : {type: Date, unique:true},
  counts       : {type: Array},
  key          : {type: String, unique:true},
  value        : {type: String, unique:true},

}, {collection: "records", minimize: false})

module.exports = mongoose.model('Records', RecordsSchema)
