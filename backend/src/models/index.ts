import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Database configuration
const env = process.env.NODE_ENV || 'development';
const config = require('../config/database')[env];

let sequelize: Sequelize;

// Set up the connection
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable] as string, config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Export sequelize for use in other files
export { sequelize };

// Model associations will be defined here when models are created
// Example:
// import User from './user';
// import Consultation from './consultation';
// 
// User.hasMany(Consultation, { foreignKey: 'patientId', as: 'patientConsultations' });
// User.hasMany(Consultation, { foreignKey: 'medicalStudentId', as: 'studentConsultations' });
// Consultation.belongsTo(User, { foreignKey: 'patientId', as: 'patient' });
// Consultation.belongsTo(User, { foreignKey: 'medicalStudentId', as: 'medicalStudent' });
