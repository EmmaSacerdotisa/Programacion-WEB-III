import express from 'express';
import cors from 'cors';
import { conectaBD } from './config/bd.js';
import categoriaRutas from './rutas/categoriaRutas.js';

const app = express();

app.use(cors());
app.use(express.json());

conectaBD();

app.use('/categorias', categoriaRutas);

const PUERTO = 3001;
app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});