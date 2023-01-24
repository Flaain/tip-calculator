import { billInput, peopleInput, percentBtn, resetBtn, customTip } from './variables.js';
import { checkInput } from './checkInput.js';
import { calculateTip } from './calculateTip.js';

export function setCustomTip(e) {
    e.preventDefault();
    let tip;

    const bill = billInput.value;
    const peopleAmount = peopleInput.value;
    const customTipValue = customTip.value;

    switch(true) {
        case checkInput(bill):
            return;
        case checkInput(peopleAmount):
            return;
        case !checkInput(customTipValue):
            percentBtn.forEach((button) => button.classList.remove('tip-form__percent-btn_state_active'));
            break;       
    }

    customTip.disabled = false;
    resetBtn.disabled = false;

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