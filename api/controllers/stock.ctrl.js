const StockList = require("../models/StockList");
const sequelize = require("../config/db");
const { DataTypes, QueryTypes, Sequelize } = require("sequelize");
exports.createStockList = (req, res, next) => {
  const { stockContent } = req.body;
  const stockName = req.body.stockName.toLowerCase();

  const column = stockContent.reduce((item, colonne) => {
    let dataTypes;
    let rowType;

    if (colonne.type === "string") {
      dataTypes = DataTypes.STRING;
    } else if (colonne.type === "int") {
      dataTypes = DataTypes.INTEGER;
    } else if (colonne.type === "date") {
      dataTypes = DataTypes.DATE;
    } else {
      res.status(400).json("Aucun type n'a été trouvée");
    }

    item[colonne.text] = {
      type: dataTypes,
      allowNull: true,
    };

    return item;
  }, {});

  const models = sequelize.define(`stock_${stockName}`, column, {
    freezeTableName: true,
    timestamps: false,
  });
  models.sync({ force: false });

  StockList.create({
    name: "stock_" + stockName,
  })
    .then((result) => res.status(201).json("La catégorie a été créer"))
    .catch((err) => res.status(400).json(err));
};

exports.getStockList = (req, res, next) => {
  StockList.findAll()
    .then((lists) => {
      res.status(200).json(lists);
      //list.name.slice(6).charAt().toUpperCase() + list.name.slice(7);
    })
    .catch((err) => {
      res
        .status(400)
        .json(
          "Une erreur est survenu lors de la récupération de la liste des stocks"
        );
    });
};

exports.getStock = (req, res, next) => {
  const { stockType, stockId } = req.params;

  sequelize
    .query(`DESCRIBE ${stockType}`)
    .then(([stock]) => {
      const rowsName = stock.map((row) => row.Field);

      sequelize
        .query(`SELECT * FROM ${stockType}`, { type: QueryTypes.SELECT })
        .then((result) => {
          res.status(200).json({ columnsName: stock, columnsContent: result });
        })
        .catch((error) => {
          res.status(400).json("Impossible de récupéré le stock ");
        });
    })
    .catch((err) => {
      res.status(500).json("Impossible de récupéré le stock");
    });
};

exports.updateStock = (req, res, next) => {
  console.log(req.body);
  StockList.findOne({ where: { id: req.params.stockId } })
    .then((list) => {
      sequelize
        .query(`DESCRIBE ${list.name}`)
        .then(([database]) => {
          const columns = database
            .filter((row) => row.Field !== "id")
            .map((row) => `\`${row.Field}\``);
          const values = Object.values(req.body)
            .map((value) => {
              if (!isNaN(value)) {
                return value;
              }
              return `'${value}'`;
            })
            .join(", ");

          sequelize
            .query(
              `INSERT INTO \`${list.name}\` (${columns}) VALUES (${values})`
            )
            .then(() => res.status(200))
            .catch((err) => {
              console.log(err);
              res
                .status(400)
                .json("Une erreur est survenue lors de l'ajout de l'item");
            });
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json("Aucun stock trouvé");
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json("Un probleme de serveur est survenu");
    });
};
