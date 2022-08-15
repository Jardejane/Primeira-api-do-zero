const seriesService = require('../services/serie.service');
const mongoose = require('mongoose');

const findAllSeriesController = async (req, res) => {
  const series = await seriesService.findAllSeriesService();
  if (series.length == 0) {
    return res.status(404).send({ Message: 'Não a series cadastrada' });
  }
  res.send(series);
};

const findIdSerieController = async (req, res) => {
  const parametroId = req.params.Id;

  const procureSerie = await seriesService.findIdSerieService(parametroId);
  res.send(procureSerie);
};

const criaçaoSerieController = async (req, res) => {
  const serie = req.body;
  const serieNova = await seriesService.criaçaoSerieService(serie);
  res.status(201).send(serieNova);
};
const atualizarSerieController = async (req, res) => {
  const parametroId = req.params.Id;
  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  const editeSerie = req.body;
  const serieAtualizada = await seriesService.atualizarSerieService(
    parametroId,
    editeSerie,
  );
  res.send(serieAtualizada);
};

const deleteSerieController = async (req, res) => {
  const parametroId = req.params.Id;
  await seriesService.deleteSerieService(parametroId);
  res.send({ aviso: 'serie apagada' });
};

module.exports = {
  findAllSeriesController,
  findIdSerieController,
  criaçaoSerieController,
  atualizarSerieController,
  deleteSerieController,
};
