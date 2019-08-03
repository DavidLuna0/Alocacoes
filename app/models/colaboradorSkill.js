'use strict';
module.exports = (sequelize, DataTypes) => {
  const ColaboradorSkill = sequelize.define('ColaboradorSkill', {
    colaboradorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Colaborador',
        key: 'id'
      }
    },
    skillId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Skill',
        key: 'id'
      }
    }
  }, {});
  return ColaboradorSkill;
};