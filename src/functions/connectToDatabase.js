import { MongoClient } from 'mongodb'

require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI
const DB_NAME = 'story-bored-test'

const connectToDatabase = async () => {
  const client = await MongoClient.connect(MONGODB_URI, {
    useUnifiedTopology: true
  })

  return client.db(DB_NAME)
}

export default connectToDatabase
