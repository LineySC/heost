const { Sequelize, where } = require("sequelize");
const Business = require("../models/Business");
const Client = require("../models/Client");

exports.createBusiness = (req, res, next) => {
  console.warn("Route Business create ok");
  const { name, designation, nbHours, price, delay, comment } = req.body;

  Business.create({
    applicant: "LineyTest",
    date_of_demand: Date.now(),
    client_name: name,
    designation: designation,
    nbHours: nbHours,
    prix: price,
    delay: delay,
    comment: comment,
  })
    .then((create) => {
      Client.findOne({ where: { client_name: create.client_name } })
        .then((client) => {
          if (!client) {
            return res.status(404).json("Le client n'a pas été trouver");
          }
          console.log(client);
          client.increment("client_total_business", { by: 1 });
          client.last_business = Date.now();
          client.save();
          res.status(201).json("L'affaire a bien été créer");
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json("Une erreur dans le client find one");
        });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(400)
        .json("Un problème est survenu lors de la création de l'affaire");
    });
};

exports.getAll = (req, res, next) => {
  Business.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) =>
      res
        .status(400)
        .json("Un problème est survenu lors de la récupération des affaires")
    );
};
