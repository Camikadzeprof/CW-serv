let https = require('https');
let express = require('express');
let { PrismaClient } = require('@prisma/client');
let prisma = new PrismaClient();
let request = require('request-promise');
let jwt = require('jsonwebtoken');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
const path = require("path");
const fs = require("fs");
/*const {accessKey, refreshKey} = require('./security/jwtKeys');
const {Admin, Guest, User, Manager, Courier} = require('./security/roles');
const {GetAbilityFor} = require('./security/privilegies');*/

module.exports = { prisma };
let app = express();
let PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser("cookie_key"));

let userRoute = require('./routes/userRoute')();
let typeRoute = require('./routes/typeRoute')();
let menuRoute = require('./routes/menuRoute')();
let orderRoute = require('./routes/orderRoute')();
let orderedFoodRoute = require('./routes/orderedFoodRoute')();
const sequelize = require('./models/seq').sequelize;

sequelize.authenticate()
    .then(() => {
        console.log('Соединение с базой данных установлено');
    })
    .catch(err => {
        console.log('Ошибка при соединении с базой данных', err.message);
    });

app.use('/users', userRoute);
app.use('/types', typeRoute);
app.use('/menu', menuRoute);
app.use('/orders', orderRoute);
app.use('/orderedFood', orderedFoodRoute);

let options = {
    key: fs.readFileSync("./security/RS-KURS-GAA.key"),
    cert: fs.readFileSync("./security/RS-KURS-GAA.crt")
}

https
    .createServer(options, app)
    .listen(PORT, () => {
        console.log(`https://localhost:${PORT}`);
    })
    .on("error", (e) => {
        console.log(`Error: ${e.code}`);
    });