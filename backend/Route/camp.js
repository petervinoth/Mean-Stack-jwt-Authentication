const expresss = require('express');
const router = expresss.Router();

const controller=require('../Controller/CampController');


router.post('/add',controller.inser);
module.exports=router;