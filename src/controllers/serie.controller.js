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
  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ mensagem: 'Id invalido' });
  }

  const procureSerie = await seriesService.findIdSerieService(parametroId);

  if (!procureSerie) {
    return res.status(404).send({ mensagem: 'Série nõo foi encontrada!' });
  }
  res.send(procureSerie);
};

const criaçaoSerieController = async (req, res) => {
  const serie = req.body;
  if (
    !serie ||
    !serie.Nome ||
    !serie.Genero ||
    !serie.NumeroTemporada ||
    !serie.Nacionalidade ||
    !serie.Criadores ||
    !serie.Sinopse ||
    !serie.image
  ) {
    return res
      .status(400)
      .send({ message: 'Alguns campos não foram preenchidos' });
  }
  const serieNova = await seriesService.criaçaoSerieService(serie);
  res.status(201).send(serieNova);
};

const atualizarSerieController = async (req, res) => {
  const parametroId = req.params.Id;

  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const editeSerie = req.body;
  if (
    !editeSerie ||
    !editeSerie.Nome ||
    !editeSerie.Genero ||
    !editeSerie.NumeroTemporada ||
    !editeSerie.Nacionalidade ||
    !editeSerie.Criadores ||
    !editeSerie.Sinopse ||
    !editeSerie.image
  ) {
    return res.status(404).send({ message: 'Preencha os campos vazios' });
  }

  const serieAtualizada = await seriesService.atualizarSerieService(
    parametroId,
    editeSerie,
  );
  res.send(serieAtualizada);
};

const deleteSerieController = async (req, res) => {
  const parametroId = req.params.Id;

  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

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
