const db = require('../db/models');

const getAllUsers = (req, res) => {
  console.log("get all users, chamada =)")
  res.status(200).send({
      message: "Retorna todos os Users"
  })
};
//RETORNA UM USUÁRIO PELO ID
const getUserId = (req, res) => {
  console.log("get user, chamada =)")
  const userId = req.params.uid
  if (userId === 'desconhecido') {
      res.status(404).send({
          message: "ID desconhecido, user not found"
      })
  } else {
      res.status(200).send({
          message: "Retorna um usuário pelo ID",
          id: userId
      })
  }
};

const usersPost = (req, res) => {
  /*const user = {
      "email": req.body.email,
      "password": req.body.password,
      "role": req.body.role,
      "restaurant": req.body.restaurant,
      "name": req.body.name
  }*/
  console.log("post user chamada ;)")
  res.status(201).send({
      message: "Insere um novo user",
      //userCriado: user
  })
};

const  usersPut = (req, res) => {
  console.log("update user chamada ;)")
  const userId = req.params.uid
  res.status(201).send({
      message: "Atualiza um user",
      id: userId
  })
};
const usersDelete  = (req, res) => {
  const userId = req.params.uid
  console.log("delete user chamada ;)")
  res.status(200).send({
      message: "exclui um user",
      id: userId
  })
};
 

module.exports = { getAllUsers, getUserId, usersPost, usersPut, usersDelete  }