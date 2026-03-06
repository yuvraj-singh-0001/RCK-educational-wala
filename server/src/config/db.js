const mongoose = require('mongoose')

const connectDB = async () => {
  const { MONGO_URI, MONGO_DB_NAME } = process.env

  if (!MONGO_URI) {
    throw new Error('MONGO_URI is missing in environment variables')
  }

  const options = {}
  if (MONGO_DB_NAME) {
    options.dbName = MONGO_DB_NAME
  }

  await mongoose.connect(MONGO_URI, options)
  console.log('MongoDB connected successfully')
}

module.exports = connectDB
