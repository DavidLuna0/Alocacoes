'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    nome: DataTypes.STRING
  }, {});
  Skill.associate = (models) => {
    Skill.belongsToMany(models.Colaborador, {
      through: 'ColaboradorSkill',
      foreignKey: 'skillId',
      as: 'colaboradores'
    })
  };
  return Skill;
};