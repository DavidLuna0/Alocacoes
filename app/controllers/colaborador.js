const { Colaborador, Skill } = require('../models');

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

module.exports.putColaborador = async (application, req, res) => {
    const {nome, salario, cargaHoraria} = req.body;
    const id = req.params.id;
    await Colaborador.update({nome, salario, cargaHoraria}, {where: {id}}).then(result => {
        res.status(201).send(result);
    }).catch(err => {
        res.send({error: err});
    })
}

module.exports.deleteColaborador = async (application, req, res) => {
    const id = req.params.id;
    Colaborador.findByPk(id).then(colaborador => {
        colaborador.destroy().then(result => {
            res.send(result);
        });
    }).catch(err => {
        res.send({error: err})
    })
}

module.exports.postColaboratorSkill = async (application, req, res) => {
    const {nome, salario, cargaHoraria, id} = req.body;
    Colaborador.create({nome, salario, cargaHoraria}).then(result => {
        result.addSkill([id]).then(resposta => {
            res.status(200).send(resposta);
        })
    })
};

module.exports.getColaboratorsSkills = async (application, req, res) => {
    Colaborador.findAll({
        include: 'skills'
    }).then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send(err);
    })
}