import handleNotFound from '../middlewares/handleNotFound.js';
import handleError from '../middlewares/handleError.js';
import handleValidationError from '../middlewares/handleValidationError.js';
import receitasRoutes from './receitasRoutes.js';
import comentariosRoutes from './comentariosRoutes.js';

const routes = (app) => {

  app.get('/ping', (req, res) => {
    res.send('pong');
  });

  
  app.use(
    receitasRoutes,
    comentariosRoutes
  );

  app.use(handleNotFound);
  app.use(handleValidationError);
  app.use(handleError);
}

export default routes;