const express=require('express');
const body_parser=require('body-parser');
const mongoose=require('mongoose');
const passport=require('passport');
const cors = require('cors');
const multer=require('multer');
require('./config/passportconfig');
require('./Model/db');
require('./config/config');

const login=require('./Route/login');
const camp=require('./Route/camp');
//const Camproute=require('./Route/Camproute');

var app=express();

app.use(body_parser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api',login);
app.use('/api',camp);
//app.use('/insert',Camproute);



//databse connect



//port
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));
