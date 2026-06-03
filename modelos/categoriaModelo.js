import { DataTypes } from 'sequelize';
import { sequelize } from '../config/bd.js';
import { Producto } from './productoModelo.js';

export const Categoria = sequelize.define('Categoria', {
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  descripcion: { type: DataTypes.STRING(255) }
}, { tableName: 'categorias' });

// Relación: Una categoría tiene muchos productos [4]
Categoria.hasMany(Producto, { foreignKey: 'categoriaId', onDelete: 'CASCADE' });
Producto.belongsTo(Categoria, { foreignKey: 'categoriaId' });