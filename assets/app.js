const result = document.querySelector('.value');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
loadAllFunction();

function loadAllFunction() {
    document.body.addEventListener('click', calc);
    clear.addEventListener('click', emptyValue);
    equal.addEventListener('clicl', runEval);
}

function calc(e) {
    if (e.toElement.classList.contains('num')) {
        if (e.target.textContent === 'c') {
            emptyValue();
        } else if (e.target.textContent === '=') {
            runEval(result.value);
        } else {
            result.value += e.target.textContent;
        }
    }
}

function emptyValue() {
    result.value = '';
}

function runEval(value) {
    if (value === '') {
        result.value = 'چیو میخوای حساب کنی ؟';
    }else{
        result.value = eval(value);
    }
}