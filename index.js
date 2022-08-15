const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/serie.route');
const connectToDatabase = require('./src/database/database')
// const connectToDatabase = require('./src/database/database');

const port = 100;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/series', routes);

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});
