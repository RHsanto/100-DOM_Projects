window.onload=()=>{
  main();
};

function main(){
 const items1 = document.getElementById('item1')
 const items2 = document.getElementById('item2')
 const items3 = document.getElementById('item3')
 const items4 = document.getElementById('item4')
 const button1 = document.getElementById('i-bnt1')
 const button2 = document.getElementById('i-bnt2')
 const button3 = document.getElementById('i-bnt3')
 const button4 = document.getElementById('i-bnt4')
 const output1 = document.getElementById('output1')
 const output2 = document.getElementById('output2')
 const output3 = document.getElementById('output3')
 const output4 = document.getElementById('output4')
 const copyBtn1 = document.getElementById('copy-btn1')
 const copyBtn2 = document.getElementById('copy-btn2')
 const copyBtn3 = document.getElementById('copy-btn3')
 const copyBtn4 = document.getElementById('copy-btn4')


 button1.addEventListener('click',function(){
  output1.value=createColor();
  items1.style.backgroundColor=createColor()
 })

 button2.addEventListener('click',function(){
  output2.value=createColor();
  items2.style.backgroundColor=createColor()
 })

 button3.addEventListener('click',function(){
  output3.value=createColor();
  items3.style.backgroundColor=createColor()
 })

 button4.addEventListener('click',function(){
  output4.value=createColor();
  items4.style.backgroundColor=createColor()
 })

 copyBtn1.addEventListener('click',function(){
  navigator.clipboard.writeText(output1.value)
})
copyBtn2.addEventListener('click',function(){
  navigator.clipboard.writeText(output2.value)
})
copyBtn3.addEventListener('click',function(){
  navigator.clipboard.writeText(output3.value)
})
copyBtn4.addEventListener('click',function(){
  navigator.clipboard.writeText(output4.value)
})
}



function createColor(){
  const red = Math.floor(Math.random()*255)
  const blue = Math.floor(Math.random()*255)
  const green = Math.floor(Math.random()*255)


  return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`
}