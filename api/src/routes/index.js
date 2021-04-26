const { Router } = require("express");
const router = Router();
const countriesRouter  =require("./countries");
const apiRouter = require("./peticionApi")

// Configurar los routers
router.use('/countries', countriesRouter);
router.use('/api', apiRouter);


module.exports = router;
