const server = require('express').Router();
const { Country } = require("../db");


server.get("/", async (req, res) => {
    try {
      const paises = await Country.findAll();
      res.status(200).json(paises);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  module.exports = server;