import connectToDatabase from './connectToDatabase'
import { ObjectId } from 'mongodb'

const queryDatabase = async (body, db) => {
  const results = await db.collection('segments')
    .insertOne({
      story_id: ObjectId(body.story_id),
      text: body.text
    })

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(results)
  }
}

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  context.callbackWaitsForEmptyEventLoop = false
  const db = await connectToDatabase()
  const body = JSON.parse(event.body)
  return queryDatabase(body, db)
}
