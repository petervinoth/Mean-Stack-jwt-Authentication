const express=require('express');
const expresss = require('express');
const router = expresss.Router();
const jwtHelper = require('../config/jwtHelper');
const ctrlUser = require('../Controller/loginController');


//router.route('/login').post(register);
//router.route('/auth').post(authenticate);
router.post('/register', ctrlUser.register);
router.post('/auth', ctrlUser.auth);
router.get('/profile',jwtHelper.verifyJwtToken,ctrlUser.profile);

module.exports = router;