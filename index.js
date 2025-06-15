// code written here
const text=document.getElementById('input')
const button1=document.getElementById('btn')
const list=document.getElementById('output')
const button2=document.getElementById('BTN')
function addGuest(){
  list.innerHTML=text.value;  
}
  button1.addEventListener('click',addGuest);

function deleteGuest(){
  list.innerHTML=text.value; 
}
button2.addEventListener('click',deleteGuest)