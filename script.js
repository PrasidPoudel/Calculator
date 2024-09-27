let num1=0,num2=0
let counter=0
let num_before=''
let operand='+'
const current=document.querySelector('.result-new');
const btns=document.querySelectorAll('.btn');
const infinite_stop=document.querySelectorAll('.stop')
const prev=document.querySelector('.result-old')
let is_result=true
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(is_result===true) {
            current.textContent=''
            is_result=false
        }
        current.textContent+= btn.textContent;
        num_before=Number(current.textContent)
        console.log('Note:'+num_before)
        num1=Number(current.textContent)
         execute.disabled=false
        if(1) {
            let test=operate(num2,num1,operand)
            console.log('This is test'+test)            
            if(test!==undefined) num_before=test         
        }
    });
});

const signs=document.querySelectorAll('.sign');
const execute=document.querySelector('#equal')

signs.forEach((item)=> {
    item.addEventListener('click',()=>{
        if(isFinite(num_before)===false) {
           disable_buttons(infinite_stop)
        }
        prev.textContent=num_before+' '+item.textContent
        current.textContent=''
        operand=item.textContent
        num2=Number(num_before)
        num1=0
        execute.disabled=false
        console.log(`Hello ${num2}`)
        console.log(operand)
    })
})

function operate(num2, num1, op) {
    let result;
    switch (op) {
        case '+':
            result = (num2 + num1).toFixed(2);
            break;
        case '-':
            result = (num2 - num1).toFixed(2);
            break;
        case '➗':
            result = (num2 / num1).toFixed(2);
            break;
        case '❌':
            if(num1===0 || num2===0) result=0;
            result = (num1 * num2).toFixed(2);
            break;
        default:
            return; 
    }
    return result; 
}

execute.addEventListener('click',()=>{
    prev.textContent=''
    console.log(typeof(prev.textContent))
    console.log(`Previous: ${prev.textContent}`)
    num_before=operate(num2,num1,operand)
    if(isFinite(num_before)===false) {
        disable_buttons(infinite_stop)
    }
    num1=0
    num2=0
    operand='+'
    current.textContent=num_before
    is_result=true
    execute.disabled=true
})
const clear=document.getElementById('Ac')
clear.addEventListener('click',()=>{
    current.textContent=''
    prev.textContent=''
    num1=0
    num2=0
    num_before=''
    operand='+'
    infinite_stop.forEach((item)=> {
        item.style.pointerEvents='auto'
    })
})
function disable_buttons(buttons) {
    buttons.forEach((num)=>{
        num.style.pointerEvents='none'
    })
}
