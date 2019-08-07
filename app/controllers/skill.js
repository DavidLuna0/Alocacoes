const { Skill } = require('../models');

module.exports.getAllSkills = async (application, req, res) => {
    Skill.findAll().then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send({error: err});
    })
}

module.exports.getSkillById = async (application, req, res) => {
    await Skill.findByPk(req.params.id).then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send({error: err});
    })
}

module.exports.postSkill = async (application, req, res) => {
    const nome = req.body;
    console.log(nome)
    await Skill.create(nome).then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send({error: err});
    });
}

module.exports.putSkill = async (application, req, res) => {
    const nome = req.body;
    const id = req.params.id;
    await Skill.update(nome, {where: {id}}).then(result => {
        res.status(201).send(result);
    }).catch(err => {
        res.send({error: err});
    })
}

module.exports.deleteSkill = async (application, req, res) => {
    const id = req.params.id;
    Skill.findByPk(id).then(skill => {
        skill.destroy().then(result => {
            res.send(result);
        });
    }).catch(err => {
        res.send({error: err})
    })
}