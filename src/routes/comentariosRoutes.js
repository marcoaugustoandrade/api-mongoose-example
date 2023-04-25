import express from 'express';
import comentariosController from '../controllers/comentariosController.js';

const comentariosRoutes = express.Router();

comentariosRoutes
  .get('/comentarios/receita/:receita_id', comentariosController.listarPorReceita)
  .get('/comentarios/:id', comentariosController.listarPorId)
  .post('/comentarios', comentariosController.criar)
  .delete('/comentarios/:id', comentariosController.deletar);

export default comentariosRoutes;