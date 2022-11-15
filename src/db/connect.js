const mongoose = require ('mongoose');
const bcrypt = require('bcryptjs');


 const connect = mongoose.connect("mongodb+srv://nouman:myVacationProject@cluster0.i0p3cal.mongodb.net/LGU").then(()=>{
    console.log("Database is connected...")
}).catch((e)=>{
    console.log(`Invalid Connection to Database ${e}`);

})

module.exports = connect;