import { Router } from 'express';

const router = Router();

let cart = [];

router.get('/', (req, res) => {
    res.json(cart);
})

export default router;