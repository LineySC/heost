const { Sequelize, where } = require("sequelize");
const Client = require("../models/Client");
const Business = require("../models/Business");

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
    createdAt: Date.now(),
    client_total_business: 0,
  })
    .then((create) => {
      res.status(201).json("Le client a été crée");
    })
    .catch((err) => {
      if (err.fields.client_name === client_name) {
        res.status(400).json("Le client est déja enregistrer chez nous");
      } else {
        res.status(500).json("Une erreur est survenu a la création du client");
      }
    });
};

exports.getAllClients = (req, res, next) => {
  Client.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json("Impossible de récupéré la liste des clients");
    });
};
