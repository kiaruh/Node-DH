const path = require ("path");
const express = require ("express");
const app = express ();

app.listen(3030,() => console.log("Open Server"))

//todo lo que pongamos en la carpeta public se pueda visitar de manera dinámica (cualquiera tiene acceso a estos archivos)
app.use(express.static(path.resolve(__dirname,"./public")));


app.get("/",(req,res) => res.sendFile(path.resolve(__dirname,"./views/index.html")))

app.get("/lovelace",(req,res) => res.sendFile(path.resolve(__dirname,"./views/lovelace.html")))

app.get("/turing",(req,res) => res.sendFile(path.resolve(__dirname,"./views/turing.html")))

app.get("/berners-lee",(req,res) => res.sendFile(path.resolve(__dirname,"./views/berners-lee.html")))

app.get("/hopper",(req,res) => res.sendFile(path.resolve(__dirname,"./views/hopper.html")))

app.get("/hamilton",(req,res) => res.sendFile(path.resolve(__dirname,"./views/hamilton.html")))

app.get("/clarke",(req,res) => res.sendFile(path.resolve(__dirname,"./views/larke.html")))

app.get("/babbage",(req,res) => res.sendFile(path.resolve(__dirname,"./views/babbage.html")))

//app.get("/",(req,res) => res.sendFile(path.join()))