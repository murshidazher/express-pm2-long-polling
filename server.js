const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors({
  origin: '*'
}));

app.use((req, res, next) => {
    console.log("URL: " + req.url);
    next();
});

app.use("/", require("./routes/poll.js"));

app.listen(8090, function() {
    console.log("Listening on port 8090");
});
