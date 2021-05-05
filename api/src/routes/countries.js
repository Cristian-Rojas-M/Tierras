const server = require("express").Router();
const { Country } = require("../db");
const { Op } = require("sequelize");

server.get("/", async (req, res) => {
  try {
    const paises = await Country.findAll();
    res.status(200).json(paises);
  } catch (error) {
    res.status(400).send(error);
  }
});

server.get("/search", async (req, res) => {
  const { value } = req.query;
  try {
    let contries = await Country.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${value}%` } },
          { continente: { [Op.iLike]: `%${value}%` } },
        ],
      },
    });
    res.status(200).json(contries);
  } catch (error) {
    res.status(400).send(error);
  }
});

server.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let country = await Country.findByPk(id);
    res.status(200).json(country);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = server;
