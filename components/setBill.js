import { billInput, peopleInput, customTip, percentBtn, resetBtn, errorBillInput } from '../utils/variables.js';
import { checkInput } from './checkInput.js';
import { calculateTip } from './calculateTip.js';
import { getOnlyNumbers } from './getOnlyNumbers.js';
import { resetInput } from './resetInput.js';
import { enableButtons } from './enabledButtons.js';

export function setBill(e) {
    e.preventDefault();

    let tip;

    const resetBillInput = new resetInput(billInput);
    const bill = getOnlyNumbers(this.value);
    this.value = bill;
    
    const peopleAmount = peopleInput.value;
    const customTipValue = customTip.value;

    if (checkInput(bill)) {
        errorBillInput.throwError();
        billInput.focus();
        resetBillInput.clearInput();
        return;
    }

    if (checkInput(peopleAmount)) return;

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