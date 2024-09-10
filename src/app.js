import express from 'express';

import productsRouter from './routes/products.router.js';
import cartRouter from './routes/cart.router.js';


const app = express();
app.listen(8080, ()=> console.log("Listening on PORT 8080"));


// middelware para analizar el cuerpo de la solicitud

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// implementamos router

app.use('/api/products', productsRouter);
app.use('/api/cart',cartRouter);