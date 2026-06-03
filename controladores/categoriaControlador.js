import { Categoria } from '../modelos/categoriaModelo.js';
import { Producto } from '../modelos/productoModelo.js';
import { check, validationResult } from 'express-validator';

// 1. Crea un endpoint POST /categorias que permita registrar una nueva
// categoría enviando nombre y descripcion en el body de la petición.

export const insertaCategoria = async (req, res) => {
  try {
    await check('nombre').notEmpty().withMessage('El nombre es obligatorio').run(req);
    const errores = validationResult(req);
    if (!errores.isEmpty()) return res.status(400).json({ errores: errores.array() });

    const nuevaCat = await Categoria.create(req.body);
    res.status(201).json(nuevaCat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 2.  Crea un endpoint GET /categorias que devuelva todas las 
// categorías registradas en la base de datos.

export const obtCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 3. Crea un endpoint GET /categorias/:id que devuelva la categoría con 
// el ID especificado y además, incluya todos los productos que pertenecen 
// a esa categoría.

export const obtCategoriaPorID = async (req, res) => {
  try {
    const categoria = await Categoria.findByPk(req.params.id, { include: Producto });
    if (!categoria) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 4. Crea un endpoint PATCH /categorias/:id que permita actualizar todos 
// los datos de la categoría con el ID especificado.

export const actualizaCategoria = async (req, res) => {
  try {
    const id = req.params.id;
    await Categoria.update(req.body, { where: { id } });
    res.status(200).json({ mensaje: 'Categoría actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 5. Crea un endpoint DELETE /categorias/:id que elimine la categoría indicada
// y, al mismo tiempo, elimine automáticamente todos los productos que pertenecen 
// a esa categoría.
export const eliminaCategoria = async (req, res) => {
  try {
    const id = req.params.id;
    await Categoria.destroy({ where: { id } });
    res.status(200).json({ mensaje: 'Categoría y sus productos eliminados' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};