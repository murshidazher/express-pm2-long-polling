const express = require('express');
const cors = require('cors');
const config = require('./routes/config');
const { nanoid } = require('nanoid');
const delay = require('delay');
const { createLightship} = require('lightship');

const app = express();

const minute = 60 * 1000;

let total = 0;
let runningTotal = 0;

app.use(cors({
  origin: '*'
}));

app.use((req, res, next) => {
    console.log(`v${config.api.VERSION} ${nanoid()} running total: ${total}, number served: ${total}, worker id: ${process.pid}`);
    next();
});

app.get('/', (req, res) => {
  total++;
  runningTotal++;

  if (total === 1000) {
    lightship.shutdown();
  }

  setTimeout(() => {
    runningTotal--;

    if (runningTotal < 100) {
      lightship.signalReady();
    } else {
      lightship.signalNotReady();
    }
  }, minute);

  res.send({
    uuid: `${nanoid()}`,
    message: `v${config.api.VERSION} : worker ID - ${process.pid}`,
    status: 'up'
  });
});

const server = app.listen(8090);

const lightship = createLightship();


lightship.registerShutdownHandler(async () => {
  // Allow sufficient amount of time to allow all of the existing
  // HTTP requests to finish before terminating the service.
  await delay(minute);

  server.close();
});

// Lightship default state is "SERVER_IS_NOT_READY". Therefore, you must signal
// that the server is now ready to accept connections.
lightship.signalReady();

