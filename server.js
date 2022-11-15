const path = require('path');
// The path module provides utilities for working with file and directory paths.


const express = require('express');
// const bcrypt = require("bcryptjs");


const app = express();

const hbs = require('hbs');


const mongoose = require('mongoose');
// Mongoose is a Node. js-based Object Data Modeling (ODM) library for MongoDB.



const port = process.env.PORT|| 8000;
app.use(express.json());

//  express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 
// This method is called as a middleware in your application using the code: app.use(express.json());

app.use(express.urlencoded({extended:false}));

// express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());



const Student = require("./src/db/schema/Student");
const Register = require("./src/db/schema/Student");
const connect = require("./src/db/connect");



// You have to install hbs and express init

const templatePath = path.join(__dirname,'./src/template/views');
console.log(templatePath);
// upper line specifies the path to the views folder where main files are present like index files to serve and render


const partialsPath = path.join(__dirname,"./src/template/partials");
// upper line specifies the path to the partials folder

app.set('views',templatePath);   
// upper line is for to change views folder with template


hbs.registerPartials(partialsPath);
// upper line is for to register partials in the file


app.set('view engine','hbs');





const staticPath = path.join('./public');


app.use(express.static(staticPath));






app.get('/',(req,res)=>{
  res.render("loginForm");
  
})
app.get('/portals',(req,res)=>{
  res.render("login")
})

app.get('/signUp',(req,res)=>{

  res.render("signup");
  
});

app.post('/signUp', async(req,res)=>{
  try{
    const schema = new Register({
      name:req.body.name,
            email:req.body.email,
            pass:req.body.pass,
            rPass:req.body.ePass,
          });
            
            const registered = await schema.save();
    
            console.log("Data Got");
            res.render('loginForm');
    
          
        }catch(e){
          console.log(e);
        
        }

})

  app.post('/',async(req,res)=>{
      
    try{
      const email = req.body.email;
      const pass = req.body.password;
    
      
      const userlogin = await Register.findOne({pass});

      // const isM = bcrypt.compare(pass,userlogin.pass)
      if(pass===userlogin.pass){
        
        res.render("index");
        }}catch(e){
      console.log(e);
    
    }
  })



app.get('/Home',(req,res)=>{
    res.render("index");
    
})

app.get('/about',(req,res)=>{
    
    res.render("about");
    
    
})


app.use(express.static(staticPath));
app.get('/portal',(req,res)=>{

    res.render("login");
    
    
    
})


app.get('*',(req,res)=>{
    res.send('404 Page not Found');
})









app.listen(port,()=>{
    console.log('listening to the port 8000');
});



// important Notes


// type in the terminal that 

// nodemon index.js -e js,hbs


// This will restart server after making the changes in the hbs and js files 


