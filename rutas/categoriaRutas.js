import express from 'express';
import { 
  obtCategorias, 
  obtCategoriaPorID, 
  insertaCategoria, 
  actualizaCategoria, 
  eliminaCategoria 
} from '../controladores/categoriaControlador.js';

const rutas = express.Router();

rutas.get('/', obtCategorias);
rutas.get('/:id', obtCategoriaPorID);
rutas.post('/', insertaCategoria);
rutas.patch('/:id', actualizaCategoria);
rutas.delete('/:id', eliminaCategoria);

export default rutas;