"use strict"

//모듈
const express = require("express");
const app = express();
const path = require('path'); //path를 import한다


//라우팅
const home = require("./src/routes/home");

//웹세팅
app.set('view engine', 'ejs'); //'ejs'탬플릿을 엔진으로 한다.
app.set("views", "./src/views");
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;