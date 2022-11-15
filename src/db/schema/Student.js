const mongoose = require("mongoose");

// const bcrypt = require('bcryptjs');

const newSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const cNewSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    rPass:{
        type:String,
        
    }
});

// cNewSchema.pre("save",async function(next){
//     if(this.isModified('pass')){
//         this.pass = await bcrypt.hash(this.pass,4);

//     }
//     this.rPass = hash;
//     next();
    

// })


const Student = new mongoose.model("Student",newSchema);
const Register = new mongoose.model("Register",cNewSchema);

module.exports = Student;
module.exports = Register;





