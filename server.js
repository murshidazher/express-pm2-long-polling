const express = require('express');
const cors = require('cors');
const appReady = require('app-ready');
const handleQuit = require('handle-quit');
const app = express();

let isDisableKeepAlive = false;

app.use(cors({
  origin: '*'
}));

// app.use((req, res, next) => {
//   if (isDisableKeepAlive) {
//     console.log("NO NEW CONNECTION: " + req.url);
//     res.set("Connection", "close");
//   }
//   next();
// });

app.use((req, res, next) => {
    console.log("URL: " + req.url);
    next();
});

app.use("/", require("./routes/poll.js"));

app.get("/api", (req, res) => {
  res.send(`I'm work! ${uuid}`);
});

await app.listen(8090, function () {
  console.log("Listening on port 8090");

  // Here we send the ready signal to PM2
  // process.send('ready');
});

appReady();

handleQuit(() => {
  // isDisableKeepAlive = true;
  server.close();
});

// process.on('SIGINT', function () {
//   // clear everything needed (like database connections, processing jobs…) before letting your application exit for a graceful shutdown
//    db.stop(function(err) {
//      process.exit(err ? 1 : 0)
//    })
// })

// process.on("SIGINT", () => {
//   isDisableKeepAlive = true;
//   handleQuit(() => {
//     server.close();
//   });
// });


