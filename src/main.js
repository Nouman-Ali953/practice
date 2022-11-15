



const a = document.querySelector("#searc");

// a.addEventListener('click',close);
function close(){
    // document.querySelector("#nav1").style.minHeight='6.3rem';
    document.querySelector("#nav1").classList.toggle('new');
    // document.querySelector(".cont").style.display='none';
    document.querySelector(".cont").classList.add("back");
}


// const counters = document.querySelectorAll('.counter');
// const speed = 20;
// counters.forEach(counter => {
//     const updateCount = () =>{
//         const target  =  +counter.getAttribute('data-target');
//         const count = +counter.innerText; 

//         const inc = target / speed;

//         // console.log(inc);

//         if(count < target){
//             counter.innerText = Math.ceil(count + inc);
//             setTimeout(updateCount,1)

//         }else{
//             count.innerText= target;
//         }
//     }

//     updateCount();
    
// });
//  var c = document.querySelector(".right ul li")[5].addEventListener('click',()=>{

//      var e = document.querySelectorAll(' #seco ul');
//      e.display ='flex';
//  });
 
 




