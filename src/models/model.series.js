const mongooose = require('mongoose');
const seriesSchema = new mongooose.Schema({
    Nome: { type: String, required: true },
    Genero:{ type: String, required: true },
    NumeroTemporada:{type: Number, required: true},
    Criadores:{type: String, required: true},
    Sinopse:{type: String, required:true},
    image: {type: String, required: true},
});

const Serie = mongooose.model('series', seriesSchema);

module.exports = Serie
