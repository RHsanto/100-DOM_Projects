window.onload=()=>{
  main();
};

function main(){
 const items1 = document.getElementById('item1')
 const items2 = document.getElementById('item2')
 const items3 = document.getElementById('item3')
 const items4 = document.getElementById('item4')
 const button1 = document.getElementById('i-bnt1')


 button1.addEventListener('click',function(){
  items1.style.backgroundColor=createColor()
  items2.style.backgroundColor=createColor()
  items3.style.backgroundColor=createColor()
  items4.style.backgroundColor=createColor()
 })
}



function createColor(){
  const red = Math.floor(Math.random()*255)
  const blue = Math.floor(Math.random()*255)
  const green = Math.floor(Math.random()*255)


  return `rgb(${red},${blue},${green})`
}