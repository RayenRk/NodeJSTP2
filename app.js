const express = require("express");
const voitures = require("./routes/voitures");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use("/voitures", voitures);

// app.listen(4000, () => {
//   console.log('Server started on http://localhost:4000');
// });

mongoose.connect(MONGOBD_URI).then(() => {
  console.log("connected to database");
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
});
