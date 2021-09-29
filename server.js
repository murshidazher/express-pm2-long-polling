const express = require('express');
const cors = require('cors');
const fabObj = require("./math-logic/fibonacci-series");
const app = express();


app.use(cors({
  origin: '*'
}));

app.use((req, res, next) => {
    console.log("URL: " + req.url);
    next();
});

app.use("/", require("./routes/poll.js"));

app.listen(8090, function () {
  // simulate time to connect to other services
  let number = fabObj.calculateFibonacciValue(Number.parseInt(50));
  console.log("Listening on port 8090");

  // Here we send the ready signal to PM2
  process.send('ready');
});

process.on('SIGINT', function () {
  // clear everything needed (like database connections, processing jobs…) before letting your application exit for a graceful shutdown
   db.stop(function(err) {
     process.exit(err ? 1 : 0)
   })
})
