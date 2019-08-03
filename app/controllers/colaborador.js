const { Colaborador } = require('../models');

module.exports.getAllColaborators = async (application, req, res) => {
    await Colaborador.findAll().then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send({error: err})
    });
}

module.exports.getColaboratorById = async (application, req, res) => {
    await Colaborador.findByPk(req.params.id).then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send({error: err});
    })
}

module.exports.postColaborator = async (application, req, res) => {
    const {nome, salario, cargaHoraria} = req.body;
    await Colaborador.create({nome, salario, cargaHoraria}).then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send({error: err});
    });
}