module.exports = (application) => {
    application.get('/colaborators', (req, res) => {
        application.app.controllers.colaborador.getAllColaborators(application, req, res);
    });

    application.get('/colaborators/:id', (req, res) => {
        application.app.controllers.colaborador.getColaboratorById(application, req, res);
    });

    application.post('/colaborators', (req, res) => {
        application.app.controllers.colaborador.postColaborator(application, req, res);
    })

    application.put('/colaborators/:id', (req, res) => {
        application.app.controllers.colaborador.putColaborador(application, req, res);
    })
}