import { DataTypes } from 'sequelize';
import { sequelize } from '../config/bd.js';

export const Producto = sequelize.define('Producto', {
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  precio: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
}, { tableName: 'productos', timestamps: false });