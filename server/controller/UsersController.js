const db = require('../db/models');

const getAllUsers = (req, res) => {
  db.Users.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message: "error ",
      })
    );
};

const getUserId = (req, res) => {
  db.Users.findAll({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message: "error ",
      })
    );
};

const usersPost = (req, res) => {
  const { name, email, password, role, restaurant } = req.body;
  db.Users.create({
    name,
    email,
    password,
    role,
    restaurant,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() =>
      res.json({
        message: "error",
      })
    );
};

const usersPut = (req, res) => {
  const { name, email, password, role, restaurant } = req.body;
  db.Users.update(
    {
      name,
      email,
      password,
      role,
      restaurant,
    },
    { where: { id: req.params.id } }
  )
    .then(() => {
      res.status(200).json({
        message: "Dados atualizados!",
      });
    })
    .catch(() => {
      res.json({
        message: "error",
      });
    });
};

const usersDelete = (req, res) => {
  db.Users.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: "Deletado!",
      });
    })
    .catch(() => {
      res.json({
        message: "error ",
      });
    });
};


module.exports = { getAllUsers, getUserId, usersPost, usersPut, usersDelete  }