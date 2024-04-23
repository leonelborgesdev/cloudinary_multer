const express = require("express");
require("dotenv").config();
const routes = require("./src/routes/index.routes.js");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

//the route
app.use(routes);

//posrt connection
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
