const { Router } = require('express');
const ProductsController = require('../controller/ProductsController');

const router = Router();

// aqui vai as requisições
// eslint-disable-next-line quotes
router.get("/", ProductsController.getAllProducts);
// eslint-disable-next-line quotes
router.get("/:id", ProductsController.getProductId);
// eslint-disable-next-line quotes
router.post("/", ProductsController.ProductPost);
// eslint-disable-next-line quotes
router.put("/:id", ProductsController.ProductPut);
// eslint-disable-next-line quotes
router.delete("/:id", ProductsController.productsDelete);

// eslint-disable-next-line eol-last
module.exports = router;