const express = require('express');
const voitures = require('./routes/voitures');

const app = express();

app.use(express.json());

app.use('/voitures', voitures);

app.listen(4000, () => {
  console.log('Server started on http://localhost:4000');
});