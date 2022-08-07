const seriesService = require('../services/serie.service');

const findAllSeriesController = (req, res) => {
  const series = seriesService.findAllSeriesService();
  res.send(series);
};

const findIdSerieController = (req, res) => {
  const idParametro = Number(req.params.Id);
  const escolhaSerie = seriesService.findIdSerieService(idParametro);
  res.send(escolhaSerie);
};

const criaçaoSerieController = (req, res) => {
  const serie = req.body;
  const novaSerie = seriesService.criaçaoSerieService(serie);
  res.send(novaSerie);
};

const atualizarSerieController = (req, res) => {
  const idParametro = Number(req.params.Id);
  const editeSerie = req.body;
  const atualizarSerie = seriesService.atualizarSerieService(
    idParametro,
    editeSerie,
  );
  res.send(atualizarSerie);
};

const deleteSerieController = (req, res) => {
  const idParametro = req.params.Id;
  seriesService.deleteSerieService(idParametro);
  res.send({ aviso: 'serie apagada' });
};

module.exports = {
  findAllSeriesController,
  findIdSerieController,
  criaçaoSerieController,
  atualizarSerieController,
  deleteSerieController,
};
