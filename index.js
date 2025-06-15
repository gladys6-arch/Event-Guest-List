// write your code here

document.addEventListener("DOMContentLoaded",()=>{
  let form=document.getElementById('form');

  let inputText=document.getElementById('text');

  let category=document.getElementById('GuestCategory');

  let guestlist=document.getElementById('list');

  let toggleButton=document.getElementById('theme-toggle');

  let currentTheme=localStorage.getItem('theme');
  if(currentTheme){
    document.body.classList.add(currentTheme);
  }
  toggleButton.addEventListener('click',() =>{
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme',theme)
  });

  const guest


})


