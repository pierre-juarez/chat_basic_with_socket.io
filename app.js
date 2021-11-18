const express = require('express');
const app = express();

const http = require('http')
const server = http.createServer(app);

app.get('/',(require, response) =>{
    // response.send('<h1>App Chat Socket</h1>');        
    response.sendFile(`${__dirname}/cliente/index.html`);
});

server.listen(3000, ()=>{
    console.log('Servidor corriendo');
})