/* eslint-disable no-trailing-spaces */
/* eslint-disable camelcase */
const db = require('../db/models');

const getAllOrders = (req, res) => {
  // const { user_id } = req.params;

  // const user = db.Users.findByPk(user_id, {
  //   include: { association: 'users' },
  // });

  db.Orders.findAll()
    .then((result) => {
      // res.status(200).json(user.users);
      res.status(200).json(result);
    })
    .catch(() => res.json({
      message: 'error',
    }));
};

const orderPost = (req, res) => {
  // const { user_id } = req.params;
  const {
    user_id, client_name, table, status, 
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
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => res.json({
      message: 'error',
    }));
};

const getOrderId = (req, res) => {
  db.Orders.findAll({ where: { id: req.params.id } })
    .then((products) => {
      res.status(200).json(products);
    })
    .catch(() => res.json({
      message: 'error',
    }));
};

const orderPut = (req, res) => {
  const {
    user_id, client_name, table, status,
  } = req.body;
  db.Orders.update({
    user_id,
    client_name,
    table,
    status,
  }, { where: { id: req.params.id } })

    .then(() => {
      res.status(200).json({
        message: 'ordem atualizada',
      });
    })
    .catch(() => {
      res.json({
        message: 'error',
      });
    });
};

const orderDelete = (req, res) => {
  db.Orders.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'ordem excluída',
      });
    })
    .catch(() => {
      res.json({
        message: 'error',
      });
    });
};

module.exports = { 
  getAllOrders,
  getOrderId,
  orderPost, 
  orderPut, 
  orderDelete,
// eslint-disable-next-line eol-last
};