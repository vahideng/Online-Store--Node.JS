const express = require('express');

const routes = express.Router();

routes.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"> <input type="text" name="product"> <button> ADD PRODUCT </botton> </form>'
  );
});

routes.post('/product', (req, res, next) => {
  console.log(req.body);

  res.redirect('/');
});

module.exports = routes;
