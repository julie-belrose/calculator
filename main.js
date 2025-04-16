document.addEventListener("DOMContentLoaded",()=>{

    let currentValue = '';
    let stashValue = null;
    let mod = null;

    const getValueResult = (value) => {
        return Number(value);
    };

    // const getValueStash = (stashValue, value ) =>{
    //
    //     stashValue = false;
    //
    //     //return value;
    // };

    const getModifier = (modifier, newValue)=>{
        switch (modifier) {
            case 'C':
                newValue = 0;
                break;
            case '+/-':
                newValue = -newValue; //inverse value with sign -
                break;
            case '%':
                mod = '%'
                newValue = newValue / 100;
                break;

            case '/':
                mod= '/';
                if (!stashValue){
                    stashValue = 0;
                } else {
                    stashValue += stashValue;
                }
                break;

            case '+':
                mod = '+';
                if (!stashValue){
                    stashValue = 0;
                } else {
                    stashValue += stashValue;
                }
                break;

            case 'X':
                mod = 'X';
                if (!stashValue){
                    stashValue = 0;
                } else {
                    stashValue += stashValue;
                }
                break;

            case '=':
                mod = '=';
                getResultTotal(currentValue, stashValue, mod);
            }
        }
    };

const = getResultTotal =()=> {
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

                // Tu peux ensuite router selon le type
                let newValue =  getValueResult();

                switch (type) {
                    case 'number':
                        // traiter les chiffres
                        if (newValue){
                            newValue = newValue + value;
                            getValueResult(newValue);
                        } else {
                            newValue = initValue + value;
                        }

                        break;
                    case 'float':
                        newValue = value + '.'
                        // gérer le point décimal
                        break;
                    case 'modifier':
                        // backspace, enter, etc.
                        getModifier(value, newValue);
                        break;
                }
            });
        });
    };

    listenToKeyboardButtons()

})




//class listen all adventListener
//keep value if not click function modifier

//switchCase by fonction

//display result

//function keep last value

//function keep value number

//another function
//keep value in screen and send value for all options


console.log("dés le debut")

