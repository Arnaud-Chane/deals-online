// const express = require("express");
// require("dotenv").config();
// const morganBody = require("morgan-body");
// const morgan = require("morgan");
// const cors = require("cors");

// const app = express();

// const port = 8000;

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
require("dotenv").config();

const app = require("./src/app");

const port = parseInt(process.env.APP_PORT ?? "5000", 10);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
