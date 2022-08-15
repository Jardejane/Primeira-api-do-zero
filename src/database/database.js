const mongoose = require('mongoose');
const connectToDatabase = () => {
  mongoose.connect('mongodb://localhost:27017/series-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb CONNECT!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro ${error}`),
    );
};

module.exports = connectToDatabase;
