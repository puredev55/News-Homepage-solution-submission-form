let menuBar = document.querySelector('.icon-menu');
let closeBtn = document.querySelector('.close');
let mini = document.querySelector('.mini');


menuBar.addEventListener('click', ()=>{
   mini.style.display = 'block';
   document.body.style.backgroundColor = 'rgba(0,0,0,0.5';
})
closeBtn.addEventListener('click',()=>{
    mini.style.display= 'none';
    document.body.style.backgroundColor = 'rgba(0,0,0,0';
})