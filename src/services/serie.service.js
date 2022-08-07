const series = [...require('../mocks/mocks')];
const findAllSeriesService = () => {
  return series;
};
const findIdSerieService = (IdParametro) => {
  return series.find((serie) => serie.Id === IdParametro);
};

const criaçaoSerieService = (novaSerie) => {
  const novo_id = series.length + 1;
  novaSerie.Id = novo_id;
  series.push(novaSerie);
  return novaSerie;
};
const atualizarSerieService = (idParametro, editeSerie) => {
  editeSerie['Id'] = Number(idParametro);
  const serieIndex = series.findIndex((serie) => serie.Id === idParametro);
  series[serieIndex] = editeSerie;
  return editeSerie;
};

const deleteSerieService = (id) => {
  const serieIndex = series.findIndex((serie) => serie.Id == id);
  return series.splice(serieIndex, 1);
};

module.exports = {
  findAllSeriesService,
  findIdSerieService,
  criaçaoSerieService,
  atualizarSerieService,
  deleteSerieService,
};
