// aqui vai o código que acessa o banco de dados


  
  const products = [
    {
      "id":1,
      "name": "Hamburger Simples",
      "flavor": "carne",
      "complement": "queijo",
    },

  ]
  
  const getAllProducts = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)")
    res.send(products)
  }
  
  module.exports = { getAllProducts }

  //Pegar por id
const getProductId = (req, res)=> {
  let id = Number(req.params.id)
  const ftArray = products.filter(data => data.id === id)
  res.status(200).send(ftArray)
}
  
//Criar Produtos
const ProductPost = (req, res) => {
  const body = req.body;
  console.log(body);
  if(!body){
    return res.status(400).end();
  } else { 
    products.push(body);
    return res.status(201).send(body);
  }
}
//Alterar Produto
const ProductPut = (req, res) => {
  console.log("alterar user ok")
  res.send("alterar user ok")
}

//Deletar Produtos
const productsDelete = (req, res) => {
  let id = Number(req.params.id)
  const ftFilter2 = products.filter(data => data.id != id)
  console.log(ftFilter2)
  res.status(200).send(ftFilter2)
}


module.exports = { getAllProducts, getProductId, ProductPost, ProductPut, productsDelete }