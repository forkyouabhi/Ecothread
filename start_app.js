const { MongoMemoryServer } = require('mongodb-memory-server');

async function run() {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  process.env.MONGO_URL = uri;
  process.env.SESSION_SECRET = 'mysecret';

  require('./app.js');
}

run();
