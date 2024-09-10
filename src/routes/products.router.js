import { Router } from 'express';
import {v4 as uuidv4} from 'uuid'

const router = Router();

let products = [];

router.get('/', (req, res) => {
    res.json(products);
})

router.post('/', (request, response) => {
    const {id, title, description, code, price, status, stock, category} = request.body;

    if( !title || !description || !code || !price || !status || !stock || !category) {
        return response.status(400).json({ error: 'Datos inválidos'});
    }

    const nuevoProducts = {
        id: uuidv4(),
        title, 
        description,
        code, 
        price,
        status,
        stock,
        category
    };

    products.push(nuevoProducts);
    response.status(201).json(nuevoProducts);
})

router.put('/:id', (request, response) => {
    const productoIdBuscado = request.params.id;
    const {id, title, description, code, price, status, stock, category} = request.body;
    const productoIndex = products.findIndex(producto => producto.id === productoIdBuscado)

    if (productoIndex === -1) {
        return response.status(404).json({error:'Producto no encontrado'})
    }

    if( id || !title || !description || !code || !price || !status || !stock || !category) {
        return response.status(400).json({ error: 'Datos inválidos'});
    }

    products[productoIndex] = {

        ...products[productoIndex],
        id: uuidv4(),
        title, 
        description,
        code, 
        price,
        status,
        stock,
        category
    };

    response.json(products[productoIndex]);
})

router.delete('/:id', (request, response) => {
    const productoAEliminar = request.params.id;
    const productoIndex = products.findIndex(producto => producto.id === productoAEliminar);

    if (productoIndex === -1) {
        return response.status(404).json({error:'Producto no encotrado'});
    }

    products.splice(productoIndex, 1);
    response.status(204).json({mensaje:'Producto Elimnado'})
})








export default router;