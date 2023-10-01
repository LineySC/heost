const { Sequelize } = require("sequelize");
const Client = require("../models/Client");

exports.createClient = (req, res, next) => {
  const {
    client_name,
    client_contact_name,
    client_contact_mail,
    client_contact_number,
  } = req.body;

  Client.create({
    client_name: client_name,
    client_contact_name: client_contact_name,
    client_contact_mail: client_contact_mail,
    client_contact_number: client_contact_number,
  })
    .then((create) => {
      res.status(201).json("Le client a été crée");
    })
    .catch((err) => {
      res.status(400).json("Une erreur est survenu a la création du client");
    });
};

exports.getAllClients = (req, res, next) => {
  Client.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) =>
      res.status(400).json("Impossible de récupéré la liste des clients")
    );
};
