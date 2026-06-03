import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('crud_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

export const conectaBD = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado a MySQL.');
    await sequelize.sync();
    console.log('Modelos sincronizados.');
  } catch (error) {
    console.error('Error de conexión:', error);
    process.exit(1);
  }
};