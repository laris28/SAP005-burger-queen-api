const users = [
  { id: 1, username: 'karine',
   email: 'karinee@teste.com'},
]

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
const usersPost = (req, res) => {
  const body = req.body;
  console.log(body);
  if(!body){
    return res.status(400).end();
  } else { 
    users.push(body);
    return res.status(201).send(body);
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