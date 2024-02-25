const { Sequelize, where } = require("sequelize");
const Business = require("../models/Business");
const Client = require("../models/Client");

exports.createBusiness = (req, res, next) => {
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
      console.log(create.client_name);
      Client.findOne({ where: { client_name: create.client_name } })
        .then((client) => {
          if (!client) {
            return res.status(404).json("Le client n'a pas été trouver");
          }
          Business.update(
            { client_id: client.id },
            { where: { client_name: create.client_name } }
          )
            .then((updating) => {
              client.last_business = Date.now();

              client.save();
              res.status(201).json("L'affaire a bien été créer");
            })
            .catch((errorUpdate) => {
              res.status(500).json("Une erreur dans le client find one");
            });
          //client.increment("client_total_business", { by: 1 });
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

exports.updateBusiness = (req, res, next) => {
  const { id, nameValueUpdate } = req.body;
  let { valueUpdate } = req.body;

  if (nameValueUpdate === "advancement") {
    if (valueUpdate > 100) {
      valueUpdate = 100;
    } else if (valueUpdate < 0) {
      valueUpdate = 0;
    }
    const inProgress = (valueUpdate * req.body.price) / 100;

    Business.update(
      { [nameValueUpdate]: valueUpdate, in_progress: inProgress },
      {
        where: { id: id },
      }
    )
      .then((listUpdate) => {
        Business.findAll()
          .then((result) => {
            res.status(200).json(result);
          })
          .catch((err) => {
            res
              .status(400)
              .json(
                "Un problème est survenu lors de la récupération des affaires"
              );
          });
      })
      .catch((err) => {
        res.status(400).json("Impossible de modifier la valeur");
      });
  } else {
    Business.update(
      { [nameValueUpdate]: valueUpdate },
      {
        where: { id: id },
      }
    )
      .then((resultUpdate) => {
        Business.findAll()
          .then((result) => {
            res.status(200).json(result);
          })
          .catch((err) => {
            res
              .status(400)
              .json(
                "Un problème est survenu lors de la récupération des affaires"
              );
          });
      })
      .catch((error) => {
        res.status(400).json("Impossible de modifier la valeur");
      });
  }
};
