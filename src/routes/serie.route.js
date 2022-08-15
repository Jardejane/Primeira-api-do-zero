const route = require('express').Router();
const controllerSeries = require('../controllers/serie.controller');
const {
  validandoId,
  validandoObjetoBody,
} = require('../middleware/serie.middleware');

route.get('/todas-series', controllerSeries.findAllSeriesController);
route.get('/serie/:Id', validandoId, controllerSeries.findIdSerieController);
route.post(
  '/criar',
  validandoObjetoBody,
  controllerSeries.criaçaoSerieController,
);
route.put(
  '/atualizar/:Id',
  validandoId,
  validandoObjetoBody,
  controllerSeries.atualizarSerieController,
);
route.delete(
  '/delete/:Id',
  validandoId,
  controllerSeries.deleteSerieController,
);

module.exports = route;
