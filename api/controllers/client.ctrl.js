const { Sequelize, where } = require("sequelize");
const Client = require("../models/Client");
const Business = require("../models/Business");
const sequelize = require("sequelize");

exports.createClient = (req, res, next) => {
  const clientData = req.body;
  clientData.createdAt = Date.now();
  clientData.client_total_business = 0;

  Client.create(clientData)
    .then((create) => {
      res.status(201).json("Le client a été créé");
    })
    .catch((err) => {
      if (err.fields.client_name === clientData.client_name) {
        res.status(400).json("Le client est déjà enregistré chez nous");
      } else {
        res.status(500).json("Une erreur est survenue à la création du client");
      }
    });
};

Client.hasMany(Business, {
  foreignKey: "client_id",
});
Business.belongsTo(Client, {
  foreignKey: "id",
});

exports.getAllClients = async (req, res, next) => {
  try {
    const clients = await Client.findAll({
      attributes: [
        "id",
        "client_name",
        "client_contact_name",
        "client_contact_mail",
        "client_contact_number",
        "createdAt",
        "last_business",
      ],
      include: [
        {
          model: Business,
          as: "businesses",
          required: false,
        },
      ],
    });

    const clientsWithBusinessCount = clients.map((client) => ({
      id: client.id,
      client_name: client.client_name,
      client_contact_name: client.client_contact_name,
      client_contact_mail: client.client_contact_mail,
      client_contact_number: client.client_contact_number,
      createdAt: client.createdAt,
      last_business: client.last_business,
      client_total_business: client.businesses.length, // Utilisez la relation incluse
    }));

    res.status(200).json(clientsWithBusinessCount);
  } catch (err) {
    console.log(err);
    res.status(400).json("Impossible de récupérer la liste des clients");
  }
};
