require('dotenv').config()

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const { dbConnectionURL } = process.env

module.exports = {
  dbConnectionURL,
  options,
}
