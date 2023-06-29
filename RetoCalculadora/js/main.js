let buttons = Array.from(document.querySelectorAll('.button'));
let display = document.getElementById('result');
let clear = document.getElementById('clear');

buttons.map(button => {
    button.addEventListener('click', (e) => {
        if (button.textContent === '=') {
            try {
                display.value = String(eval(display.value));
            } catch {
                display.value = "Error";
                setTimeout(() => display.value = '', 1500);
            }
        } else {
            display.value += e.target.textContent;
        }
    })
});

clear.addEventListener('click', () => {
    display.value = '';
});