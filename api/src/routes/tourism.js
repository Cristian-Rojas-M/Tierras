const server = require("express").Router();
const { Tourism } = require("../db");

server.get("/", async (req, res) => {
    try {
        const tourism = await Tourism.findAll();
        res.status(200).json(tourism)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = server;