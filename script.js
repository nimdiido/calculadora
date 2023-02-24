const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.display input');
const buttons = calculator.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

function handleClick(event) {
    const button = event.target;
    const action = button.textContent;

    if (action === 'C') {
        clearDisplay();
    } else if (action === '=') {
        calculate();
    } else {
        addToDisplay(action);
    }
}

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    display.value = eval(display.value);
}