const { Sequelize } = require("sequelize");
const Business = require("../models/Business");

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
      res.status(201).json("L'affaire a bien été créer");
    })
    .catch((err) => {
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
