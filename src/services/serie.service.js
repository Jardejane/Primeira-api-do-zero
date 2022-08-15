const Series = require('../models/model.series');

const findAllSeriesService = async () => {
  const Allseries = await Series.find();
  return Allseries;
};

const findIdSerieService = async (parametroId) => {
  const idSerie = await Series.findById(parametroId);
  return idSerie;
};

const criaçaoSerieService = async (novaSerie) => {
  const criaçaoSerie = await Series.create(novaSerie);
  return criaçaoSerie;
};
const atualizarSerieService = async (parametroId, editeSerie) => {
  const editSerie = await Series.findByIdAndUpdate(parametroId, editeSerie);
  return editSerie;
};

const deleteSerieService = async (parametroId) => {
  return await Series.findByIdAndDelete(parametroId);
};

module.exports = {
  findAllSeriesService,
  findIdSerieService,
  criaçaoSerieService,
  atualizarSerieService,
  deleteSerieService,
};
