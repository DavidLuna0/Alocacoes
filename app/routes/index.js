
module.exports = (application) => {
    application.get('/', (req, res) => {
        res.send('Seja bem vindo a aplicação');
    });
}