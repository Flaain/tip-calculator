import { billInput, peopleInput, customTip, percentBtn, resetBtn, errorBillInput } from '../utils/variables.js';
import { checkInput } from './checkInput.js';
import { calculateTip } from './calculateTip.js';
import { getOnlyNumbers } from './getOnlyNumbers.js';
import { resetInput } from './resetInput.js';
import { enableButtons } from './enabledButtons.js';
import { getActiveTip } from './getActiveTip.js';

export function setBill(e) {
    e.preventDefault();

    const activeButton = Array.from(percentBtn).find((button) => button.classList.contains('form__btn_state_active'));
    const resetBillInput = new resetInput(billInput);
    const { value: bill } = this;
    this.value = getOnlyNumbers(bill);
    
    const { value: peopleAmount } = peopleInput;
    const { value: customTipValue } = customTip;

    try {
        if (checkInput(bill)) {
            errorBillInput.throwError();
            billInput.focus();
            resetBillInput.clearInput();
            throw new SyntaxError('Bill input cannot be empty')
        }
    
        else if (checkInput(peopleAmount)) return;

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