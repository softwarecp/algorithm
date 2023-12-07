let nav= document.querySelector("header nav");
window.addEventListener("scroll",function(){
    nav.classList.toggle("stickyHeader",window.scrollY>0);
});
console.log(nav);
let manualButton = document.querySelectorAll(".manual-btn");
console.log(manualButton);
let T = manualButton;
 manualButton.forEach((button)=>{
    
    button.addEventListener("click",function(){
        for(let i=0; i<manualButton.length;i++){
            manualButton[i].classList.remove("Na3lbook");
            console.log(manualButton[i]);
        };
        button.classList.toggle("Na3lbook");
        
    }); 
    
}); 
let dropDown = document.querySelector(".dropDown");
let dropBtn = document.querySelector(".dropBtn");
let spanList= document.querySelectorAll(".dropBtn span");
dropBtn.addEventListener("click",()=>{
    dropDown.style.display='flex';
    dropDown.classList.toggle("hide");
    dropBtn.classList.toggle('btnInv');
     spanList.forEach((span)=>{
        span.classList.toggle('spanInv');
    }); 

    console.log(spanList);
  })
 /* let menu= document.querySelector('.dMenu');
 
 menu.addEventListener(()=>{
    document.querySelector('.menu').classList.toggle('hideMenu');
 })
 */
let counter = 1;
setInterval(function(){
    
    document.querySelector('#radioB' + counter).checked = true;
    console.log( document.querySelector('#radioB' + counter));
    counter++;
    if(counter > 4){
      counter = 1;
    }
  }, 3000); 
  /* --------------------------------------------JS for targeting links --------------------------------------------- */
    
let linkList= document.querySelectorAll("a");
linkList.forEach((link)=>{
    link.href= "contactUs.html";
});