const express = require('express');
const port = 3030;

const app = express();
const indexController = require('./controllers/indexController');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');

app.use(express.static('public'));

app.get('/', indexController.index);
app.get('/product-detail', productController.detail);
app.get('/register', userController.register);
app.get('/login', userController.login );
app.get('/profile', userController.profile);

app.listen(port, () => console.log('Server running in http://localhost:' + port))