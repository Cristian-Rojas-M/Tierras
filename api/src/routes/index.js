const { Router } = require("express");
const publicacionesRouter = require("./publicaciones");
const router = Router();

router.use("/publicaciones", publicacionesRouter);

module.exports = router;
