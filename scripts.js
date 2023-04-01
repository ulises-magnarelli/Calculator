const pastValueDisplay = document.getElementById('pastValue');
const newValueDisplay = document.getElementById('newValue');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const display = new Display(pastValueDisplay,newValueDisplay)

numberButtons.forEach(botton => {
    botton.addEventListener('click', ()=> display.addNumber(botton.innerHTML))
});


operatorButtons.forEach(botton => {
    botton.addEventListener('click', () => display.compute(botton.value))
});