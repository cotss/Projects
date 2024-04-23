let expression = '';
let history = [];
let pendingSqrt = null;

function clearDisplay() {
    document.getElementById('display').value = '';
    expression = '';
}

function toggleSign() {
    let display = document.getElementById('display');
    if (display.value.startsWith('-')) {
        display.value = display.value.substring(1);
    } else {
        display.value = '-' + display.value;
    }
    expression = display.value;
}

function append(value) {
    if (value === 'sqrt') {
        let number = parseFloat(expression);
        if (!isNaN(number)) {
            pendingSqrt = 'sqrt(' + number + ')';
        }
        document.getElementById('display').value = pendingSqrt;
    } else if (value === '^') {
        expression += '**';
    } else if (value === '%') {
        let number = parseFloat(expression);
        if (!isNaN(number)) {
            expression = (number / 100).toString();
        }
        document.getElementById('display').value = expression;
    } else {
        expression += value;
        document.getElementById('display').value = expression;
    }
}


function backspace() {
    expression = expression.slice(0, -1);
    document.getElementById('display').value = expression;
}

function calculate() {
    try {
        let result = eval(expression);
        if (pendingSqrt) {
            history.push(pendingSqrt + ' = ' + Math.sqrt(result));
            expression = Math.sqrt(result).toString();
            pendingSqrt = null;
        } else {
            history.push(expression + ' = ' + result);
            expression = result.toString();
        }
        document.getElementById('display').value = expression;
        updateHistory();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function updateHistory() {
    let historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    history.forEach((item) => {
        let li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}
