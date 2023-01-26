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
    const customTipValue = customTip.value;
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