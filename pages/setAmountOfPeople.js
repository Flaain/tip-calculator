import { billInput, peopleInput, customTip, percentBtn, resetBtn, error } from './variables.js';
import { checkInput } from './checkInput.js';
import { calculateTip } from './calculateTip.js';
import { reset } from './reset.js';
import { getOnlyNumbers } from './getOnlyNumbers.js';

export function setAmountOfPeople(e) {
    e.preventDefault();
    let tip;
    let errorTimer;

    const bill = billInput.value;
    const customTipAmount = customTip.value;
    const peopleAmount = getOnlyNumbers(peopleInput.value);
    peopleInput.value = peopleAmount;

    switch(parseInt(peopleAmount)) {
        case 0:
            error.classList.add('tip-form__people-error_state_active');
            errorTimer = setTimeout(() => error.classList.remove('tip-form__people-error_state_active'), 5000);
            peopleInput.classList.add('tip-form__people-input_state_error');
            peopleInput.focus();
            errorTimer = setTimeout(() => peopleInput.classList.remove('tip-form__people-input_state_error'), 5000);
            reset();       
            return;       
    }

    if (checkInput(bill)) return;

    customTip.disabled = false;
    resetBtn.disabled = false;

    resetBtn.classList.add('total__reset-btn_state_active');
    customTip.classList.add('tip-form__custom-percent_state_active');

    if (!document.querySelector('.tip-form__percent-btn_state_active') && !customTipAmount) {
        percentBtn.forEach((button) => {
            if (parseFloat(button.dataset.value) === 5) {
                button.classList.add('tip-form__percent-btn_state_active');
                return tip = button.dataset?.value;
            }
        });
    } else {
        tip = customTipAmount ? customTipAmount : document.querySelector('.tip-form__percent-btn_state_active').dataset?.value
    }    

    calculateTip(bill, tip, peopleAmount);
}