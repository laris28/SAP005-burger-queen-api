const { Router } = require('express');
// eslint-disable-next-line quotes
const UsersRouter = require("./UsersRouter");
// eslint-disable-next-line quotes
const ProductsRouter = require("./ProductsRouter");
// eslint-disable-next-line quotes
const OrdersRouter = require("./OrdersRouter");

const router = Router();

// aqui vai todas as rotas
router.use('/users', UsersRouter);
router.use('/products', ProductsRouter);
router.use('/orders', OrdersRouter);

// eslint-disable-next-line eol-last
module.exports = router;