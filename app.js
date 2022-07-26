const express = require('express');
const port = 3030;
const app = express();

const indexRouter = require('./routes/index');



const productController = require('./controllers/productController');
const userController = require('./controllers/userController');

app.use(express.static('public'));

/* rutas */
app.use('/',indexRouter);
app.get('/product-detail', productController.detail);
app.get('/register', userController.register);
app.get('/login', userController.login );
app.get('/profile', userController.profile);

app.listen(port, () => console.log('Server running in http://localhost:' + port))