const express = require('express')
const app = express()

app.get(`/`, (req, res) => {
    res.send(`<h1 style="color:blue">Bienvenidos al servidor express</h1>`)

})

let  visitas= 0
app.get(`/visitas`, (req,res)=> {
    res.send(`La cantidad de visitas es ${++visitas}`)
})

app.get(`/fyh`, (req,res)=> {
    res.send({fyh: new Date().toLocaleString()})
})
app.get(`/ruta`,(req,res)=>{
    res.send({curso: `programacion Backend`, año:2022, expliacacion:`glitch`}) 
})

const PORT=8080

const server= app.listen(PORT,()=>{
    console.log(`servidor http escuchando en el puerto ${server.address().port}`)
})
//escuchar el evento
server.on(`error`, error => console.log(`Este es el error ${error}`))
