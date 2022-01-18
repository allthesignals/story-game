To start the mock api:
`json-server --watch src/db.json --port 3001`

`GET http://localhost:3001/stories`

Create

create a story
POST /stories

Read
get all stories
GET /stories

get a single story with all blurbs
GET /stories/:storyid

get a story with only the latest segment
GET /stories/:storyid/continue

Update

add a new segment to a story
PUT /stories/:storyid

Story

{
  id: string,
  title: string,
  creator: User,
  createdAt: timestamp,
  updatedAt: timestamp,
  tags: string[],
  segments: Segment[]
}

Segment

{
  id: string,
  story: storyId,
  author: User,
  createdAt: timestamp,
  text: string
}
