const Users = require('../db/models/UserModels') 

// const users = [
//   { id: 1, username: 'larissa',
//    email: 'larissa@teste.com'},
// ]

//Pegar os usuários
const getAllUsers = (req, res) => {
  res.send(users)
}
console.log(users)

//pegar por id
const getUserId = (req, res)=> {
  let id = Number(req.params.id)
  const ftArray = users.filter(data => data.id === id)
  res.status(200).send(ftArray)
}

//Criar
async function usersPost (req, res) {
  const { name, email, password, role } = req.body;
  console.log(body);
  if(!body){
    return res.status(400).end();
  } else { 
    const users = await Users.create({ name, email, password, role });
    res.status(200).send(users);
  }
}

//Alterar 
const usersPut = (req, res) => {
  console.log("Alterado!")
  res.send("Alterado!")
}

//Deletar usuário
const usersDelete = (req, res) => {
  let id = Number(req.params.id)
  const ftArray2 = users.filter(data => data.id != id)
  console.log(ftArray2)
  res.status(200).send(ftArray2)
}


module.exports = { getAllUsers, getUserId, usersPost, usersPut, usersDelete  }