const { Router } = require('express')
const UsersRouter = require("./UsersRouter")



const router = Router()

// aqui vai todas as rotas
router.use('/users', UsersRouter)



module.exports = router