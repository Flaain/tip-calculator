import { billInput, peopleInput, percentBtn, resetBtn, customTip } from '../utils/variables.js';
import { checkInput } from './checkInput.js';
import { calculateTip } from './calculateTip.js';
import { getOnlyNumbers } from './getOnlyNumbers.js';
import { enableButtons } from './enabledButtons.js';

export function setCustomTip(e) {
    e.preventDefault();
    let tip;

    const bill = billInput.value;
    const peopleAmount = peopleInput.value;

    const customTipValue = getOnlyNumbers(this.value);
    this.value = customTipValue;

    if(!checkInput(customTipValue)) {
        percentBtn.forEach((button) => button.classList.remove('form__btn_state_active'));
    }

    enableButtons();

    resetBtn.classList.add('button_state_active');
    customTip.classList.add('form__input_state_active');

    if (!document.querySelector('.form__btn_state_active') && !customTipValue) {
        percentBtn.forEach((button) => {
            if (parseFloat(button.dataset.value) === 5) {
                button.classList.add('form__btn_state_active');
                return tip = button.dataset?.value;
            }
        });
    } else {
        tip = customTipValue ? customTipValue : document.querySelector('.form__btn_state_active').dataset?.value
    }    

    calculateTip(bill, tip, peopleAmount);
}