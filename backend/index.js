const express = require("express")
const sql = require("mssql")
const router = require("./Controller/Routes/Router")
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors());
app.use("/" , router);



const PORT = 5000;

app.listen(PORT, () => {
  console.log("App is listening on port " + PORT);
});