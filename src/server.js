require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('routes');
const {PORT, MONGO_URI} = require('config');

const mongo = require('mongo');
const notFound = require('middlewares/notFound');
app.use(express.json());
app.use(routes);
app.use(notFound);
mongo(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server start at port: ${PORT}`);
});
