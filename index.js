const express = require("express")

const app= express()
const {port} = require("./config/index")

app.get("/", (req,res)=>{
    res.send("Escuchando en el puerto"+ port)
})

app.listen(port, function(){
    console.log("Escuchando en el puerto " + port)
})