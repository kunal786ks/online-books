const express=require('express');
const { addUser, getUser } = require('../controller/userController');

const router=express.Router();


router.post('/add-user',addUser);
router.post('/get-user',getUser);


module.exports=router;