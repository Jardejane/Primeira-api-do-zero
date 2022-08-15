const Series = require('../models/model.series')

const findAllSeriesService = async () => {
  const series = await Series.find()
  return series;
};

const findIdSerieService = async (IdParametro) => {

  const serieId = await Series.findById(IdParametro)
  return serieId
};

const criaçaoSerieService = async (novaSerie) => {
  const novSerie = await Series.create(novaSerie)
  return novSerie;
};
const atualizarSerieService = async (idParametro, editeSerie) => {
 const editSerie = await Series.findByIdAndUpdate(idParametro,editeSerie)
  return editSerie;
};

const deleteSerieService = async (id) => {
  return await Series.findByIdAndDelete(id)
};

module.exports = {
  findAllSeriesService,
  findIdSerieService,
  criaçaoSerieService,
  atualizarSerieService,
  deleteSerieService,
};
