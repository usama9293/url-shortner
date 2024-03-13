const btn=document.querySelectorAll('.item')
const body= document.querySelector('body')

btn.forEach((item)=>{

 item.addEventListener('click',(e)=>{
  if(e.target.id=='black'){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id=='brown'){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id=='white'){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id=='yellow'){
    body.style.backgroundColor=e.target.id;
  }
 })




})

