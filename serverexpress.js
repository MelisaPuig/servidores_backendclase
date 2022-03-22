// const express = require('express')
// const app = express()

// app.use(express.static('public'))

// app.get('/mensaje', (req,res) => {
//     res.send('Hola Bienvenido al proyecto Node Js con git!');
// })

// const PORT = process.env.PORT || 8080
// const server = app.listen(PORT, () => {
//     console.log(`Servidor express escuchando en el puerto ${PORT}`)
// })
// server.on('error', error => console.log(`Error en servidor ${error}`))


const express = require('express');
const app = express();

const PORT=8081;

const server= app.listen(PORT,()=>{
    console.log(`servidor escuchando en el puerto ${server.address().port}`)
})
//escuchar el evento
server.on(`error`, error => console.log(`Este es el error ${error}`))