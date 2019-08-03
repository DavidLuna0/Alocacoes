module.exports = (application) => {
    application.get('/skills', (req, res) => {
        application.app.controllers.skill.getAllSkills(application, req, res);
    });

    application.get('/skills/:id', (req, res) => {
        application.app.controllers.skill.getSkillById(application, req, res);
    });

    application.post('/skills', (req, res) => {
        application.app.controllers.skill.postSkill(application, req, res);
    });

    application.put('/skills/:id', (req, res) => {
        application.app.controllers.skill.putSkill(application, req, res);
    })

    application.delete('/skills/:id', (req, res) => {
        application.app.controllers.skill.deleteSkill(application, req, res);
    })
    

    
}