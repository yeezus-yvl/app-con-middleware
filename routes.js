var express = require('express');
var app = express();
var middleware = require('./middleware');

var saludos = (req,res,next)=>{
    console.log("HOLIIS");
    next();
};

var fecha = (req,res,next)=>{
    let hoy = new Date();
    let dia=("0" + hoy.getDate()).slice(-2);
    let mes=("0" + (hoy.getMonth() + 1)).slice(-2);
    let year= hoy.getFullYear();

    let horas=("0" + hoy.getHours()).slice(-2);
    let minutos=("0" + hoy.getMinutes()).slice(-2);
    let segundos=("0" + hoy.getSeconds()).slice(-2);

    console.log(`${dia}/${mes}/${year} ${horas}:${minutos}:${segundos}`);
    next();    
}

app.get("/",fecha,saludos,(req,res)=>{
    res.send("Estas en la raiz");
})

app.get("/home",fecha,(req,res)=>{
    res.send("Estas en la pagina Principal");
})

app.get("/variante",saludos,(req,res)=>{
    res.send("Estas en una variente de la pagina");
})

module.exports = app;