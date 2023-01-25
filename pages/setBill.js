import { billInput, peopleInput, customTip, percentBtn, resetBtn } from './variables.js';
import { checkInput } from './checkInput.js';
import { calculateTip } from './calculateTip.js';
import { getOnlyNumbers } from './getOnlyNumbers.js';

export function setBill(e) {
    e.preventDefault();

    let tip;

    const bill = getOnlyNumbers(billInput.value);
    billInput.value = bill;
    
    const peopleAmount = customTip.value;
    const customTipValue = customTip.value;

    if (checkInput(peopleAmount)) return;

    resetBtn.disabled = false;
    customTip.disabled = false;

    resetBtn.classList.add('total__reset-btn_state_active');
    customTip.classList.add('tip-form__custom-percent_state_active');

    if (!document.querySelector('.tip-form__percent-btn_state_active') && !customTipValue) {
        percentBtn.forEach((button) => {
            if (parseFloat(button.dataset.value) === 5) {
                button.classList.add('tip-form__percent-btn_state_active');
                return tip = button.dataset?.value;
            }
        });
    } else {
        tip = customTipValue ? customTipValue : document.querySelector('.tip-form__percent-btn_state_active').dataset?.value
    }    

    calculateTip(bill, tip, peopleAmount);
}