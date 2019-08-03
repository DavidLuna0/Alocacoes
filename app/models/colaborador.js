module.exports = (sequelize, DataTypes) => {
    const Colaborador = sequelize.define('Colaborador', {
        nome: DataTypes.STRING,
        salario: DataTypes.FLOAT,
        cargaHoraria: DataTypes.STRING,
    }, {});
    Colaborador.associate = (models) => {
        /* User.belongsTo(models.Company, {foreignKey: 'companyId', as: 'company'}) */
    };
    Colaborador.associate = (models) => {
        Colaborador.belongsToMany(models.Skill, {
            through: 'ColaboradorSkill',
            as: 'skills',
            foreignKey: 'colaboradorId'
        } )
    }
    return Colaborador;
}