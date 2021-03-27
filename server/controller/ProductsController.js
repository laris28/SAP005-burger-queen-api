const Products= require('../db/models')
  
async function getAllProducts(req, res)  {
  try {
    const products = await Products.findAll();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
}

//Pegar por id
async function getProductId(req, res) {
  try {
    const id = req.params;
    const product = await Products.findOne({
      where: id,
    });
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(400).send("Não deu certo");
  }
}
  
//Criar Produtos
async function ProductPost(req, res) {
  try {
    const { name, flavor, complement, sub_type, type, price } = req.body;
    const product = await Products.create({name, flavor, complement, sub_type, type, price });
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
  }
}
//Alterar Produto
async function ProductPut(req, res) {
  try {
    const { name, flavor, complement, sub_type, type, price } = req.body;

    const id = req.params;
    await Products.update(
      {name, flavor, complement, sub_type, type, price },
      {
        where: id,
      }
    );
    res.status(200).send("Alteração feita");
  } catch (error) {
    console.log(error);
    res.status(400).send("Não deu certo");
  }
}
//Deletar Produtos
async function productsDelete(req, res) {
  try {
    const id = req.params;
    await Products.destroy({
      where: id,
    });
    res.status(200).send("Produto deletado");
  } catch (error) {
    console.log(error);
    res.status(400).send("não deu certo");
  }

}


module.exports = { getAllProducts, getProductId, ProductPost, ProductPut, productsDelete }