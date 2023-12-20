// /lib/dbConnect.js
const mongoose = require("mongoose");
require("dotenv").config();

// Heavily borrowed from https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js
const MONGODB_URI = process.env.DATABASE_URL;
// Timeout const. 10 minutes * 60 seconds * 1000 milliseconds
const CACHE_INVALIDATION_TIME = 10 * 60 * 1000;
let lastCacheInvalidationTime = 0;
if (!MONGODB_URI) {
  throw new Error("Setup a MongoDB url in .env");
}

// Prevent tonnes of connections from being spun up on hot reloads using a global 'singleton' of Mongoose
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
  lastCacheInvalidationTime = new Date().getTime();
}

async function dbConnect() {
  if (cached.conn) {
    // check if CACHE_INVALIDATION_TIME has elapsed since our last invalidation
    if (new Date().getTime() < lastCacheInvalidationTime + CACHE_INVALIDATION_TIME) {
      return cached.conn;
    }
    else{
      console.log("Invalidating the cached database connection.")
    }
  }


  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  
  lastCacheInvalidationTime = new Date().getTime();
  return cached.conn;
}

module.exports = dbConnect;
