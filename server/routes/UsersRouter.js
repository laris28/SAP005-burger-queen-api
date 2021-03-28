const { Router } = require('express');
const UsersController = require('../controller/UsersController');

const router = Router();

// aqui vai as requisições
// eslint-disable-next-line quotes
router.get("/", UsersController.getAllUsers);
// eslint-disable-next-line quotes
router.get("/:id", UsersController.getUserId);
// eslint-disable-next-line quotes
router.post("/", UsersController.usersPost);
// eslint-disable-next-line quotes
router.put("/:id", UsersController.usersPut);
// eslint-disable-next-line quotes
router.delete("/:id", UsersController.usersDelete);

// eslint-disable-next-line eol-last
module.exports = router;