const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/submit-form", (req, res) => {
  console.log("Данные, полученные от клиента:", req.body);
  res.status(200).send();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
