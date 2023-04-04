import receitasRoutes from './receitasRoutes.js';

const routes = (app) => {

  app.get('/ping', (req, res) => {
    res.send('pong');
  });

  app.use(
    receitasRoutes
  );
}

export default routes;