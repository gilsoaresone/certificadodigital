const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();
const userRoute = require("./routes/user");



var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares

app.use(express.json());
app.use("/api", userRoute);



// routes
app.get("/", cors(corsOptions), (req, res) => {
    res.send("Bem vindo a minha api");
});

// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado ao banco de de dados"))
    .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Servidor na porta", port));
