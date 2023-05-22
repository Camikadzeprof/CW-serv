require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors')
let apiRouter = require('./routes/apiRoute');
let authRouter = require('./routes/authRoute');
let menuRouter = require('./routes/menuRoute');
let orderItemRouter = require('./routes/orderItemRoute');
let orderRouter = require('./routes/orderRoute');
let typeRouter = require('./routes/typeRoute');
let cartRouter = require('./routes/cartRoute');
let userRouter = require('./routes/userRoute');
let app = express();
let passport = require('passport');
let mongoose = require('mongoose');
let initializePassport = require('./config/passport-config');
let fs = require('fs');
let ip = require('ip');

const options = {
    cert: fs.readFileSync('./config/RS-GAA-CRT.crt'),
    key: fs.readFileSync('./config/RS-KURS-GAA.key')
}

let server = require('https').createServer(options, app);
let io = require('socket.io')(server);

mongoose.connect('mongodb://localhost:27017/CourseWork', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(r => {
    console.log('Connected to MongoDB');
}).catch(e => {
    console.log(e.message);
})

initializePassport(passport);
app.use(passport.initialize());

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 }));
app.use(bodyParser.urlencoded({ extended: false }));

let messages = [];
let users = [];
io.on('connection', socket => {
    socket.on('JOIN', ({username}) => {

        if (users.some(user => user.username === username)){
            users = users.filter(user => user.username !== username);
        }
        users.push({userID: socket.id, username: username});
        socket.broadcast.emit("SET_USERS", users);
        socket.emit("SOCKET_DATA", {
            users: users,
            messages: messages
        })
        socket.broadcast.emit("SOCKET_DATA", {
            users: users,
            messages: messages
        })
    })
    socket.on("NEW_MESSAGE", ({username, message}) => {
        const obj = {
            username,
            message
        };
        messages.push(obj);
        socket.broadcast.emit("NEW_MESSAGE", obj);
        socket.emit("SOCKET_DATA", {
            users: users,
            messages: messages
        })
        socket.broadcast.emit("SOCKET_DATA", {
            users: users,
            messages: messages
        })
    })
    socket.on("USER_DISCONNECTED", username => {
        users = users.filter(user => user.username !== username);
        console.log("socket data emit broadcast")
        socket.broadcast.emit("SOCKET_DATA", {
            users: users,
            messages: messages
        })
    })
})

app.use(apiRouter);
app.use(authRouter);
app.use(menuRouter);
app.use(orderItemRouter);
app.use(orderRouter);
app.use(typeRouter);
app.use(cartRouter);
app.use(userRouter);

server.listen(3000, ()=> {
    console.log('Express server started on port: ' + server.address().port+`\n`)});