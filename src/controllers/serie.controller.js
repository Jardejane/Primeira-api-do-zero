const seriesService = require('../services/serie.service');
const mongoose = require('mongoose');

const findAllSeriesController = async (req, res) => {
  const series = await seriesService.findAllSeriesService();
  if (series.length == 0) {
    return res.status(404).send({ Message: 'não a series cadastrada' });
  }
  res.send(series);
};

const findIdSerieController = async (req, res) => {
  const idParametro = req.params.Id;
  if (!mongoose.Types.ObjectId.isValid(idParametro)) {
    return res.status(400).send({ mensagem: 'id invalido' });
  }

  const procureSerie = await seriesService.findIdSerieService(idParametro);

  if (!procureSerie) {
    return res.status(404).send({ mensagem: 'serie nao foi encontarda' });
  }
  res.send(procureSerie);
  // const escolhaSerie = seriesService.findIdSerieService(idParametro);
  //   res.send(escolhaSerie);
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
      .send({ message: 'Alguns campos não foi preenchidos' });
  }
  const novaSerie = await seriesService.criaçaoSerieService(serie);
  res.status(201).send(novaSerie);
  // const novaSerie = seriesService.criaçaoSerieService(serie);
  // res.send(novaSerie);
};

const atualizarSerieController = async (req, res) => {
  const idParametro = req.params.Id;

  if (!mongoose.Types.ObjectId.isValid(idParametro)) {
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
    return res.status(404).send({ message: 'Envie todos os campos da serie' });
  }

  const atualizarSerie = await seriesService.atualizarSerieService(
    idParametro,
    editeSerie,
  );
  res.send(atualizarSerie);

  // const editeSerie = req.body;
  // const atualizarSerie = seriesService.atualizarSerieService(
  //   idParametro,
  //   editeSerie,
  // );
  // res.send(atualizarSerie);
};

const deleteSerieController = async (req, res) => {
  const idParametro = req.params.Id;

  if (!mongoose.Types.ObjectId.isValid(idParametro)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  await seriesService.deleteSerieService(idParametro);
  res.send({ aviso: 'serie apagada' });
};

module.exports = {
  findAllSeriesController,
  findIdSerieController,
  criaçaoSerieController,
  atualizarSerieController,
  deleteSerieController,
};
