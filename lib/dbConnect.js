// /lib/dbConnect.js
const mongoose = require("mongoose");
require("dotenv").config()
 
// Heavily borrowed from https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
const MONGODB_URI = process.env.DATABASE_URL

if (!MONGODB_URI) {
  throw new Error(
    'Setup a MongoDB url in .env'
  )
}


// Prevent tonnes of connections from being spun up on hot reloads using a global 'singleton' of Mongoose
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect () {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

module.exports = dbConnect