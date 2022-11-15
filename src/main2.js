var a = document.querySelector("#but");

a.addEventListener('click',()=>{
    
    
    var b = document.getElementById("text").value;

        if(b=="nauman@gmail.com"){
            document.write('ok... You have logged in');
        }
        else{
            
            
            window.alert(' Wrong Password! Try Again...');
        
        }
   

})