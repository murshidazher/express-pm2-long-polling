const express = require('express');
const cors = require('cors');
const http = require('http')
const { createTerminus } = require('@godaddy/terminus')
const appReady = require('./app-ready');
const handleQuit = require('./handle-quit');
const app = express();

app.use(cors({
  origin: '*'
}));

app.use((req, res, next) => {
    console.log("URL: " + req.url);
    next();
});

app.get('/', (req, res) => {
  res.send('ok')
})

app.get("/api", (req, res) => {
  res.send(`I'm work! ${uuid}`);
});

// handleQuit(() => {
//   isDisableKeepAlive = true;
//   server.close(() => {
//     console.log('Http server closed.');
//   });
// });

const server = http.createServer(app)

function onSignal () {
  console.log('server is starting cleanup')
  // start cleanup of resource, like databases or file descriptors
}

async function onHealthCheck () {
  // checks if the system is healthy, like the db connection is live
  // resolves, if health, rejects if not
  if()
  return Promise.resolve('true');
}

createTerminus(server, {
  signal: 'SIGINT',
  healthChecks: { '/healthcheck': onHealthCheck },
  onSignal
})

server.listen(8090, function () {
  console.log("Listening on port 8090");

  // Here we send the ready signal to PM2
  appReady();
});

// process.on('SIGINT', function () {
//   // clear everything needed (like database connections, processing jobs…) before letting your application exit for a graceful shutdown
//    db.stop(function(err) {
//      process.exit(err ? 1 : 0)
//    })
// })


