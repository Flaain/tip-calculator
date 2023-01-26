import { billInput, peopleInput, customTip, percentBtn, resetBtn, errorPeopleInput } from '../utils/variables.js';
import { checkInput } from './checkInput.js';
import { calculateTip } from './calculateTip.js';
import { getOnlyNumbers } from './getOnlyNumbers.js';
import { resetInput } from './resetInput.js';
import { enableButtons } from './enabledButtons.js';

export function setAmountOfPeople(e) {
    e.preventDefault();
    let tip;

    const bill = billInput.value;
    const customTipAmount = customTip.value;
    const resetPeopleInput = new resetInput(peopleInput);
    const peopleAmount = getOnlyNumbers(this.value);
    this.value = peopleAmount;

    if (checkInput(peopleAmount)) {
        errorPeopleInput.throwError();
        peopleInput.focus();
        resetPeopleInput.clearInput();
        return;
    }

    if (checkInput(bill)) return;

    enableButtons()

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