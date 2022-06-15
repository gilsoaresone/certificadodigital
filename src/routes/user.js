const express = require("express");
const userSchema = require("../models/user");
const { body, validationResult } = require("express-validator")
const router = express.Router();

// create user
router.post("/agendamento", (req, res) => {
    const user = userSchema(req.body);

    if (!req.body.dataAgendada) {
        return res.status(400).json('Campo data agendada é obrigatório')
    } else if (!req.body.nomeAgendador) {
        return res.status(400).json('Campo nome do agendador é obrigatório')
    } else if (!req.body.cpfAgendador) {
        return res.status(400).json('Campo cpf do agendador é obrigatório ')
    } else if (!req.body.nomeAgenteRegistroDesignado) {
        return res.status(400).json('Campo nome do agente de registro designado é obrigatório')
    } else if (!req.body.cpfAgenteRegistroDesignado) {
        return res.status(400).json('Campo cpf do agente de registro designado é obrigatório')
    }

    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/agendamento", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: "Erro na busca de um agendamento. Entre em contado com o desenvolvedor" }));
});

// get a user
router.get("/agendamento/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: "Erro na busca de um agendamento. Entre em contado com o desenvolvedor" }));

});

// delete a user
router.delete("/agendamento/:id", (req, res) => {
    const { id } = req.params;

    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json({ message: "Agendamento deletado com sucesso" }))
        .catch((error) => res.json({ message: "Erro ao tentar deletar um agendamento." }));
});

// update a user
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { dataAgendada, nomeAgendador, cpfAgendador, nomeAgenteRegistroDesignado, cpfAgenteRegistroDesignado } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { dataAgendada, nomeAgendador, cpfAgendador, nomeAgenteRegistroDesignado, cpfAgenteRegistroDesignado } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;