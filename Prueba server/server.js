const fs = require('fs');
const https = require('https')
const express = require('express');
const app = express();
const socketio = require('socket.io');
app.use(express.static(__dirname))

const key = fs.readFileSync('cert.key');
const cert = fs.readFileSync('cert.crt');

const expressServer = https.createServer({key, cert}, app);

const io = socketio(expressServer,{
    cors: {
        origin: [
            "https://localhost",
            'https://handlink.i.ng'
        ],
        methods: ["GET", "POST"]
    }
});
expressServer.listen(3000);

