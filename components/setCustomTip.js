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
        percentBtn.forEach((button) => button.classList.remove('tip-form__percent-btn_state_active'));
    }

    enableButtons();

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
        if (customTipValue) {
            tip = customTipValue;
        } else {
            tip = document.querySelector('.tip-form__percent-btn_state_active').dataset?.value;
        }
    }    

    calculateTip(bill, tip, peopleAmount);
}