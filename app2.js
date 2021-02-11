let operator = document.getElementById('operator')

operatorRandom = Math.floor(Math.random() * 4);
if (operatorRandom === 1){
    operator.textContent = '+'
} else if (operatorRandom === 2) {
    operator.textContent = '-'
} else if (operatorRandom === 3) {
    operator = 'x'
} else if  (operatorRandom === 4){
    
}

<div>
<span id= 'number-one'>one</span> 
<span id= 'operator'></span>
<span id= 'number-two'>two</span>
<button id= 'generate-number'>asdf</button>
</div>
