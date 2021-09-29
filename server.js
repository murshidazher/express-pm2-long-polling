const express = require('express');
const cors = require('cors');
const app = express();

let isDisableKeepAlive = false;

app.use((req, res, next) => {
  if (isDisableKeepAlive) {
    res.set("Connection", "close");
  }
  next();
});

app.use(cors({
  origin: '*'
}));

app.use((req, res, next) => {
    console.log("URL: " + req.url);
    next();
});

app.use("/", require("./routes/poll.js"));

app.get("/api", (req, res) => {
  res.send(`I'm work! ${uuid}`);
});

app.listen(8090, function () {
  console.log("Listening on port 8090");

  // Here we send the ready signal to PM2
  process.send('ready');
});

// process.on('SIGINT', function () {
//   // clear everything needed (like database connections, processing jobs…) before letting your application exit for a graceful shutdown
//    db.stop(function(err) {
//      process.exit(err ? 1 : 0)
//    })
// })

process.on("SIGINT", () => {
  isDisableKeepAlive = true;
  server.close(() => {
    console.log(`server closed`);
    process.exit(0);
  });
});
