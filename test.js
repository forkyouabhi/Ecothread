const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const { app } = require('./app.js'); // Assuming app is exported, we might need to modify app.js to export app without listening if we want to run tests this way

async function run() {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  console.log("MongoMemoryServer URI:", uri);

  process.env.MONGO_URL = uri;
  process.env.SESSION_SECRET = 'mysecret';

  // start app.js using child process
  const { spawn } = require('child_process');
  const child = spawn('node', ['app.js'], { env: { ...process.env } });

  child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  setTimeout(() => {
    child.kill();
    mongod.stop();
    console.log("stopped");
  }, 10000);
}

run();
