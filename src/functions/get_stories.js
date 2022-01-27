import connectToDatabase from './connectToDatabase'

const queryDatabase = async (db) => {
  const results = await db.collection('stories')
    .aggregate([
      {
        $lookup: {
          from: 'segments',
          localField: '_id',
          foreignField: 'story_id',
          as: 'segments'
        }
      }
    ])
    .toArray()

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(results)
  }
}

exports.handler = async (event, context) => {
  // otherwise the connection will never complete, since
  // we keep the DB connection alive
  context.callbackWaitsForEmptyEventLoop = false
  const db = await connectToDatabase()
  return queryDatabase(db)
}
