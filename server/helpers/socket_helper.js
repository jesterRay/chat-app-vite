const express = require('express');
const app = express();
require('dotenv').config();
const http = require('http');
const { Server } = require('socket.io');
app.use(require('cors')());
const server = http.createServer(app);

const socket_port = process.env.SOCKET_PORT || 3001;


const io = new Server(server, {
    cors: {
        origin:'*',
        methods: ["GET","POST"]
    }
})
 
io.on('connection', (socket) => {
    console.log(`user connected: ${socket.id}`);
    socket.on("sendMessage",data => {
        console.log(data)
        socket.broadcast.emit('receiveMessage', {data: data});
    });

})

server.listen(socket_port,() => 
    console.log(`Socket Server at http://127.0.0.1:${socket_port}`)
)