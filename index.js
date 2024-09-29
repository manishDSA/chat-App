const express= require('express')
const path= require('path')
const http= require('http')
const {Server} = require("socket.io")
const app = express()



const server= http.createServer(app);
// create a new server
const io= new Server(server)

//socket.io connetion from frontend
// socket is a client/user
io.on('connection', (socket) => {
socket.on("client messsage",(message)=>{
    io.emit("message",message)
})

})
app.use(express.static(path.resolve('./public')))
app.get('/',(req,res)=>{
return res.sendFile('/public/index.html')
})

server.listen(9000,()=>{
    console.log(`server is running on port 9000`);
    
})
