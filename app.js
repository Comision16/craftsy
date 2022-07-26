const express = require('express');
const port = 3030;
const app = express();

const indexRouter = require('./routes/index');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');


app.use(express.static('public'));

/* rutas */
app.use('/',indexRouter);
app.use('/products', productRouter);
app.use('/users',userRouter);

app.listen(port, () => console.log('Server running in http://localhost:' + port))