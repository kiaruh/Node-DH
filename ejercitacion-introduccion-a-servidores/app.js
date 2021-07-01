
const express = require('express');

const app = express();

const path = require('path');

// Micro Desafio 4.
app.use(express.static(path.resolve(__dirname,"./public")));

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in http://localhost:3030 port'));

/*
    ** RUTAS A LOS RECURSOS **
*/

// Ruta Raíz / ➝ Home
app.get("/",(req,res) => res.sendFile(path.resolve(__dirname,"./views/index.html")))

app.get("/lovelace",(req,res) => res.sendFile(path.resolve(__dirname,"./views/lovelace.html")))

app.get("/turing",(req,res) => res.sendFile(path.resolve(__dirname,"./views/turing.html")))

app.get("/berners-lee",(req,res) => res.sendFile(path.resolve(__dirname,"./views/berners-lee.html")))

app.get("/hopper",(req,res) => res.sendFile(path.resolve(__dirname,"./views/hopper.html")))

app.get("/hamilton",(req,res) => res.sendFile(path.resolve(__dirname,"./views/hamilton.html")))

app.get("/clarke",(req,res) => res.sendFile(path.resolve(__dirname,"./views/larke.html")))

app.get("/babbage",(req,res) => res.sendFile(path.resolve(__dirname,"./views/babbage.html")))

// Ruta Créditos

// Ruta 404 ¿?
