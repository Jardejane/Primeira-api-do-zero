const route = require('express').Router();
const controllerSeries = require('../controllers/serie.controller');

route.get('/todas-series', controllerSeries.findAllSeriesController);
route.get('/serie/:Id', controllerSeries.findIdSerieController);
route.post('/criar', controllerSeries.criaçaoSerieController);
route.put('/atualizar/:Id', controllerSeries.atualizarSerieController);
route.delete('/delete/:Id', controllerSeries.deleteSerieController);

module.exports = route;
