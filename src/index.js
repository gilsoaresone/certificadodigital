const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();
const userRoute = require("./routes/user");







// settings
const app = express();
const port = process.env.PORT || 9000;









// middlewares

app.use(express.json());
app.use("/api", userRoute);
          app.use(function(req, res, next) {
          res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          next();
          });





// routes
app.get("/", function (req, res, next) => {
          
     
     res.send("Bem vindo a minha api");

});

// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado ao banco de de dados"))
    .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Servidor na porta", port));
