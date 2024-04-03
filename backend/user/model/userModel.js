const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    userImage:{
        type:String,
        default:'/images/defaultUser.jpg'
    },
    userPhone:{
        type:String,
        default:"01234-56789"
    },
    userWebsite:{
        type:String,
        default:"NOT ADDED YET"
    },
    userAddress:{
        type:String,
        default:"STREET CITY COUNTRY"
    }
},{timestamps:true});


const User=mongoose.model('User',userSchema)

module.exports=User;

