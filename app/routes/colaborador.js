module.exports = (application) => {
    application.get('/colaborators', (req, res) => {
        application.app.controllers.colaborador.getAllColaborators(application, req, res);
    });

    application.get('/colaborators/:id', (req, res) => {
        application.app.controllers.colaborador.getColaboratorById(application, req, res);
    });

    application.get('/colaborators/skills', (req, res) => {
        application.app.controllers.colaborador.getColaboratorsSkills(application, req, res);
    })

    application.post('/colaborators', (req, res) => {
        application.app.controllers.colaborador.postColaborator(application, req, res);
    })

    application.post('/colaborators/skills', (req, res) => {
        application.app.controllers.colaborador.postColaboratorSkill(application, req, res);
    })

    application.put('/colaborators/:id', (req, res) => {
        application.app.controllers.colaborador.putColaborador(application, req, res);
    })

    application.delete('/colaborators/:id', (req, res) => {
        application.app.controllers.colaborador.deleteColaborador(application, req, res);
    })
}