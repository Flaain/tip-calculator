import { billInput, peopleInput, customTip, percentBtn, resetBtn, errorPeopleInput } from '../utils/variables.js';
import { checkInput } from './checkInput.js';
import { calculateTip } from './calculateTip.js';
import { getOnlyNumbers } from './getOnlyNumbers.js';
import { resetInput } from './resetInput.js';
import { enableButtons } from './enabledButtons.js';
import { getActiveTip } from './getActiveTip.js';

export function setAmountOfPeople(e) {
    e.preventDefault();

    const activeButton = Array.from(percentBtn).find((button) => button.classList.contains('form__btn_state_active'));

    const { value: bill } = billInput;
    const { value: customTipValue } = customTip;
    const resetPeopleInput = new resetInput(peopleInput);
    const { value: peopleAmount } = this;
    this.value = getOnlyNumbers(peopleAmount);

    try {
        if (checkInput(peopleAmount)) {
            errorPeopleInput.throwError();
            peopleInput.focus();
            resetPeopleInput.clearInput();
            throw new SyntaxError('People input cannot be empty')
        }
    
        else if (checkInput(bill)) return;
        
        else {
        const tip = getActiveTip(activeButton, customTipValue);
        enableButtons();
    
        resetBtn.classList.add('button_state_active');
        customTip.classList.add('form__input_state_active');

            
        calculateTip(bill, tip, peopleAmount);
       }
    } catch (error) {
        console.error(error);
    }
}