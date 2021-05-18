const { Router } = require("express");
const router = Router();
const countryRouter = require("./countries");
const apiRouter = require("./peticionApi");
const tourismRouter = require("./tourism");

// Configurar los routers
router.use("/countries", countryRouter);
router.use("/api", apiRouter);
router.use("/tourism", tourismRouter);

module.exports = router;
