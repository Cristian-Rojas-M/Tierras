const { Router } = require("express");
const router = Router();
const countryRouter = require("./countries");
const apiRouter = require("./peticionApi");

// Configurar los routers
router.use("/countries", countryRouter);
router.use("/api", apiRouter);

module.exports = router;
