import { ObjectId } from 'mongodb'
import connectToDatabase from './connectToDatabase'

const queryDatabase = async (body, db) => {
  const results = await db.collection('stories')
    .insertOne({
      text: body.title,
      tags: body.tags
    })

  await db.collection('segments')
    .insertOne({
      story_id: ObjectId(results.insertedId),
      text: body.segmentText
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
