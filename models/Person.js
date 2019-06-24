const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
    profilepic:{
        type:String,
        required:true,
        default:"https://i.pinimg.com/564x/45/66/3a/45663ad4acb156ab35a36f76d2e51ba7.jpg"
    },
    date:{
        type:Date,
        default:Date.now
    }

});

module.exports = Person = mongoose.model("myPerson",PersonSchema);