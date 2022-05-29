// Global

let div = null;

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

 // copy btn-1
 copyBtn1.addEventListener('click',function(){
  navigator.clipboard.writeText(output1.value);
  if(div !== null){
 div.remove();
 div = null;
  }
 if(isValid(output1.value)){
  generateToastMessage(`${output1.value} copied`)
 }
 else{
   alert(' Invalid Color Code')
 }
})
// copy btn-2
copyBtn2.addEventListener('click',function(){
  navigator.clipboard.writeText(output2.value);
  if(div !== null){
 div.remove();
 div = null;
  }
  if(isValid(output2.value)){
    generateToastMessage(`${output2.value} copied`)
   }
   else{
     alert(' Invalid Color Code')
   }
})
// copy btn-3
copyBtn3.addEventListener('click',function(){
  navigator.clipboard.writeText(output3.value);
  if(div !== null){
 div.remove();
 div = null;
  }
  if(isValid(output3.value)){
    generateToastMessage(`${output3.value} copied`)
   }
   else{
     alert(' Invalid Color Code')
   }
})

// copy btn-4
copyBtn4.addEventListener('click',function(){
  navigator.clipboard.writeText(output4.value);
  if(div !== null){
 div.remove();
 div = null;
  }
  if(isValid(output4.value)){
    generateToastMessage(`${output4.value} copied`)
   }
   else{
     alert(' Invalid Color Code')
   }
})

output1.addEventListener('keyup',function(e){
  const color = e.target.value
  if(color && isValid(color)){
    items1.style.backgroundColor = color;
  }
})
output2.addEventListener('keyup',function(e){
  const color = e.target.value
  if(color && isValid(color)){
    items2.style.backgroundColor = color;
  }
})
output3.addEventListener('keyup',function(e){
  const color = e.target.value
  if(color && isValid(color)){
    items3.style.backgroundColor = color;
  }
})
output4.addEventListener('keyup',function(e){
  const color = e.target.value
  if(color && isValid(color)){
    items4.style.backgroundColor = color;
  }
})

}



function createColor(){
  const red = Math.floor(Math.random()*255)
  const blue = Math.floor(Math.random()*255)
  const green = Math.floor(Math.random()*255)

  return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`
}

//  crete toast message

function generateToastMessage(msg){
  div = document.createElement('div')
  div.innerText=msg
  div.className= 'toast-message toast-message-slide-in';
  div.addEventListener('click',function(){
    div.classList.remove('toast-message-slide-in');
    div.classList.add('toast-message-slide-out');

    div.addEventListener('animationend',function(){
      div.remove();
      div = null;
    })
  })
  document.body.appendChild(div);

}

// hex color

/**
* @param {string} color 
*/
function isValid(color){
  if(color.length !==7)return false;
  if(color[0] !=='#')return false;
  color = color.substring(1)
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}