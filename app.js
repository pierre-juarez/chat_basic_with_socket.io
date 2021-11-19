const express = require('express');
const app = express();

const http = require('http')
const server = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(server);

io.on('connection', (socket) =>{
    // console.log('Un usuario se ha conectado');
    // socket.on('chat',(msg)=>{
    //     console.log(msg);
    // });
    socket.on('chat',(msg)=>{
        io.emit('chat',msg);
    });

});

app.get('/',(require, response) =>{
    // response.send('<h1>App Chat Socket</h1>');        
    response.sendFile(`${__dirname}/cliente/index.html`);
});

server.listen(3000, ()=>{
    console.log('Servidor corriendo');
})