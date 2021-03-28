/* eslint-disable no-trailing-spaces */
/* eslint-disable camelcase */

const db = require('../db/models');

const getAllOrders = (req, res) => {
  // const { user_id } = req.params;

  // const user = db.Users.findByPk(user_id, {
  //   include: { association: 'users' },
  // });

  db.Orders.findAll({
    attributes: { exclude: ['password'] },
  })
    .then((result) => {
      // res.status(200).json(user.users);
      res.status(200).json(result);
    })
    .catch(() => res.status(400).json({
      message: 'erro ao processar requisição',
    }));
};

const orderPost = (req, res) => {
  // const { user_id } = req.params;
  const {
    user_id, client_name, table, status, processedAt,
  } = req.body;

  // const user = db.Users.findByPk(user_id);

  // if (!user) {
  //   return res.status(400).json({ error: 'User not found' });
  // }

  db.Orders.create({
    user_id,
    client_name,
    table,
    status,
    processedAt,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => res.status(400).json({
      message: 'erro ao salvar ordem',
    }));
};

const getOrderId = (req, res) => {
  db.Orders.findAll({
    attributes: { exclude: ['password'] },
    where: { id: req.params.id },
  })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch(() => res.status(400).json({
      message: 'erro ao processar requisição',
    }));
};

const orderPut = (req, res) => {
  const {
    status,
  } = req.body;
  db.Orders.update({
    status,
  }, { where: { id: req.params.id } })

    .then(() => {
      res.status(200).json({
        message: 'ordem atualizada',
      });
    })
    .catch(() => res.status(400).json({
      message: 'erro ao atualizar ordem',
    }));
};

const orderDelete = (req, res) => {
  db.Orders.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'ordem excluída',
      });
    })
    .catch(() => res.status(400).json({
      message: 'erro ao excluir ordem',
    }));
};

// eslint-disable-next-line no-trailing-spaces
module.exports = { 
  getAllOrders,
  getOrderId,
  orderPost, 
  orderPut, 
  orderDelete,
};
