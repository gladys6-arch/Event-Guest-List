// code written here
const button=document.getElementById('btn');// calling the id of add button
button.addEventListener('click',addGUEST);


function addGUEST(event){
 event.preventDefault();
  // calling out the function by there id
  const guestNameInput=document.getElementById('guest-name');
  const guestlist=document.getElementById('guest-list');
  const ListNames=document.getElementById('list');

  // add text in input
  const name=guestNameInput.value;
  if(name===""){
   ListNames.textContent="please enter guest name!";
    return;

  }else{
    ListNames.textContent="";
  }
   // limiting the name of guests
  
  if(guestlist.children.length >10){
    alert("Guest list is full!");
    return;
  }
  // to print names in the console
   console.log(name);

  const Li=document.createElement('li');
  Li.textContent=name + "";
  // to activate the delete button and enable to remove name
  const deleteBtn=document.createElement('button');
  deleteBtn.textContent="Remove";
  deleteBtn.addEventListener('click',()=>{
    guestlist.removeChild(Li);
  })
  // enable output to the brower
  Li.appendChild(deleteBtn);
  guestlist.appendChild(Li);
  guestNameInput.value="";

}




