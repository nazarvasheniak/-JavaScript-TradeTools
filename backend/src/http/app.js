const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user');
const binanceRoute = require('./routes/binance');
const errorRoute = require('./routes/error');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

module.exports = services => {
  const user = userRoute.create(services);
  const binance = binanceRoute.create(services);

  app.use('/users', user);
  app.use('./binance', binance);
  app.use(errorRoute);

  return app;
};
