const server = require('express').Router();
const { Country } = require("../db");
const fetchUrl = require("fetch").fetchUrl;


server.get("/", async (req, res) => {
    await fetchUrl(
      "https://restcountries.eu/rest/v2/all",
      function (error, meta, body) {
        try {
          let aux = JSON.parse(body);
  
          aux.forEach((coutrie) => {
            Country.create({
              name: coutrie.name,
              ID: coutrie.alpha3Code,
              image: coutrie.flag,
              continente: coutrie.region,
              capital: coutrie.capital,
              subregion: coutrie.subregion,
              area: coutrie.area,
              poblacion: coutrie.population,
            });
          });
          res.status(200).json(aux);
        } catch (error) {
          console.log(error);
          res.status(400).send(error);
        }
      }
    );
  });

  module.exports = server;