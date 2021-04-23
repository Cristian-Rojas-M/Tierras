const { Router } = require("express");
const { Country } = require("../db");
const fetchUrl = require("fetch").fetchUrl;
const router = Router();

// Configurar los routers
router.get("/api", async (req, res) => {
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

router.get("/paises", async (req, res) => {
  try {
    const paises = await Country.findAll();
    res.status(200).json(paises);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
