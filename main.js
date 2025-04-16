document.addEventListener("DOMContentLoaded",()=>{

    let currentValue = '';
    let stashValue = null;
    let mod = null;

    const getModifier = (modifier, newValue)=>{
        switch (modifier) {
            case 'C':
                currentValue = 0;
                console.log("Reset");
                break;
            case '+/-':
                stashValue = -newValue; //inverse value with sign -
                console.log("Inversion de signe :", currentValue);
                break;
            case '%':
                mod = '%'
                stashValue = newValue / 100;
                console.log("Pourcentage :", stashValue);
                break;

            case '/':
            case '+':
            case 'X':
                mod = modifier;
                stashValue = newValue;
                currentValue = '';
                console.log(`Opérateur "${mod}" stocké avec stash = ${stashValue}`);
                break;

            case '=':
                console.log(`Operateur ${mod}`);
                getResultTotal(currentValue, stashValue, mod);
                break;
            }
    };

const getResultTotal =(currentVal, stashValue, mod)=> {

    console.log(`${currentVal} ${stashValue} ${mod} `);

    let result;
    if (!currentVal || !stashValue || !mod) {
        return result = 0;
    }

    const a = Number(stashValue);
    const b = Number(currentVal);

    switch (mod) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case 'X': result = a * b; break;
        case '/': result = b !== 0 ? a / b : 'error'; break;
        default:
            result = 'Error'
            break;
    }

    console.log(`Résultat de ${currentVal} ${mod} ${stashValue} =`, result);
    currentValue = String(result);
    stashValue = '';
    mod = null;
}

    const listenToKeyboardButtons= () => {
        let initValue = 0;
        let newValue = 0;

        const buttons = document.querySelectorAll('.keyboard__button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {

                //get value in data-type
                const value = button.getAttribute('data-key');
                const type = button.getAttribute('data-type');

                console.log(`Value: ${value}, Type: ${type}`);

                switch (type) {
                    case 'number':
                        currentValue += value;
                        console.log("Valeur courante :", currentValue);
                        break;
                    case 'float':
                        if (!currentValue.includes('.')) {
                            currentValue += currentValue ? '.' : '0.';
                        }
                        console.log("Float ajouté :", currentValue);
                        break;
                    case 'modifier':
                        getModifier(value, Number(currentValue));
                        break;
                }
            });
        });
    };

    listenToKeyboardButtons();

})




//class listen all adventListener
//keep value if not click function modifier

//switchCase by fonction

//display result

//function keep last value

//function keep value number

//another function
//keep value in screen and send value for all options

