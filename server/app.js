const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
const errorHandling = require("./midlewares/errorhandling")
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/", routes);
app.use(errorHandling);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
