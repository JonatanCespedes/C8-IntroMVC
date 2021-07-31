const express = require('express');
const app = express();

/* ENRUTADORES */
let indexRouter = require('./routes/indexRouter');
let productsRouter = require('./routes/productsRouter');

/* Rutas */
app.use('/', indexRouter)
app.use('/products', productsRouter)


app.listen(3000, () => console.log("Servidor levantado"))