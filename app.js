const express = require("express");
const voitures = require("./routes/voitures");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const auth = require("./routes/auth");

dotenv.config();
const MONGOBD_URI = process.env.MONGOBD_URI;
const PORT = process.env.PORT || 5000;

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
