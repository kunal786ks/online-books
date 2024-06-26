const express=require('express');
const { addUser, getUser, uplaodUserImage, updateGeneralInfo, updatePassword, deleteUser } = require('../controller/userController');
const { upload } = require('../helper/multerService');

const router=express.Router();

router.put('/upload-image/:userId',uplaodUserImage);
router.put('/update-data/:userId',updateGeneralInfo);
router.put('/update-pass/:userId',updatePassword);


router.post('/add-user',addUser);
router.post('/get-user',getUser);


router.delete('/delete-user/:userId',deleteUser)

module.exports=router;