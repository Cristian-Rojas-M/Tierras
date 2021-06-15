const server = require("express").Router();
const { Publicaciones } = require("../db.js");
const { Op } = require("sequelize");

server.get("/", async (req, res) => {
  const { value } = req.query;
  try {
    if (value) {
      let searchPublicacion = await Publicaciones.findAll({
        where: {
          [Op.or]: [
            { titulo: { [Op.iLike]: `%${value}%` } },
            { ubicacion: { [Op.iLike]: `%${value}%` } },
          ],
        },
      });
      res.status(200).json(searchPublicacion);
    } else {
      let publicaciones = await Publicaciones.findAll();
      res.status(200).json(publicaciones);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

server.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      let publicacion = await Publicaciones.findOne({ where: { id } });
      res.status(200).json(publicacion);
    } else {
      res.status(400).send("faltan datos");
    }
  } catch (error) {
    res.status(200).send(error);
  }
});

server.post("/crearPublicacion", async (req, res) => {
  const {
    titulo,
    descripcion_corta,
    descripcion_larga,
    ubicacion,
    precio,
    stock,
    codigo_postal,
    latitud,
    longitud,
    imagen,
  } = req.body;

  try {
    if (
      titulo &&
      descripcion_corta &&
      descripcion_larga &&
      ubicacion &&
      precio &&
      stock &&
      codigo_postal &&
      latitud &&
      longitud &&
      imagen
    ) {
      let newPublicacion = await Publicaciones.findOrCreate({
        where: {
          titulo,
          descripcion_corta,
          descripcion_larga,
          ubicacion,
          precio,
          stock,
          codigo_postal,
          latitud,
          longitud,
          imagen,
        },
      });
      res.status(200).json(newPublicacion);
    } else {
      res.status(400).send("faltan datos");
    }
  } catch (error) {
    console.log("asco");
    res.status(200).send(error);
  }
});

server.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const {
    titulo,
    descripcion_corta,
    descripcion_larga,
    ubicacion,
    precio,
    stock,
    codigo_postal,
    latitud,
    longitud,
    imagen,
  } = req.body;

  try {
    if (
      titulo ||
      descripcion_corta ||
      descripcion_larga ||
      ubicacion ||
      precio ||
      stock ||
      codigo_postal ||
      latitud ||
      longitud ||
      imagen
    ) {
      await Publicaciones.update(
        {
          titulo,
          descripcion_corta,
          descripcion_larga,
          ubicacion,
          precio,
          stock,
          codigo_postal,
          latitud,
          longitud,
          imagen,
        },
        { where: { id } }
      );
      let publicacion = await Publicaciones.findByPk(id);

      res.status(200).json(publicacion);
    } else {
      res.status(400).send("datos no validos");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

server.delete("/eliminarPublicacion/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await Publicaciones.destroy({ where: { id } });
      res.status(200).send(`eliminaste la publicacion con el id ${id}`);
    } else {
      res.status(400).send("falta id");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = server;
