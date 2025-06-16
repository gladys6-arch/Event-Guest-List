// code written here
console.log('enter guest name')
  

// getting elements by id

const text=document.getElementById('input')
const button1=document.getElementById('btn')
const list=document.getElementById('output')
const button2=document.getElementById('BTN')


// adding click effect

function deleteGuest(){
  list.textContent=text.value; 
  
}
button2.addEventListener('click',deleteGuest)
       

  //addGuest.forEach(guest => {
   // const listItem=document.createElement("div")
   // listItem.textContent=guest
   // list.append(listItem)
  //});
