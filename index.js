document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.btn');
    let sV = '0';

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.innerText;

            if (buttonText === 'AC') {
                sV = '0';
            } else if (buttonText === '=') {
                sV = eval(sV);
            } else if (buttonText === '+/-') {
                sV = String(-parseFloat(sV));
            } /*else if (buttonText === 'C') {
                sV = sV.slice(0, -1) || '0';
            }*/ else if (buttonText === '^') {
                sV = String(Math.pow(parseFloat(sV), 2));
            } else {
                if (sV === '0') {
                    sV = buttonText;
                } else {
                    sV += buttonText;
                }
            }

            screen.value = sV;
        });
    });
});