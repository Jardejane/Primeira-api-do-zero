const mongoose = require('mongoose');

const validandoId = (req, res, next) => {
  const parametroId = req.params.Id;
  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ mensagem: 'Id invalido' });
  }
  next();
};
const validandoObjetoBody = (req, res, next) => {
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
  next();
};

module.exports = {
  validandoId,
  validandoObjetoBody,
};
