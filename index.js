/* eslint-disable import/newline-after-import */
/* eslint-disable import/order */
require('dotenv').config();
const express = require('express');
// eslint-disable-next-line import/newline-after-import
const routes = require('./server/routes/index');
const app = express();
const port = process.env.PORT || 3000;

// eslint-disable-next-line import/newline-after-import
// eslint-disable-next-line quotes
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use('/', routes);

app.get('*', (req, res) => {
  // eslint-disable-next-line semi
  res.send('Hello World!')
});

app.listen(port, () => {
  // eslint-disable-next-line semi
  console.log(`Example app listening at http://localhost:${port}`)
// eslint-disable-next-line eol-last
});