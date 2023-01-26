import {
    billInput,
    peopleInput,
    customTip,
    percentBtn,
    resetBtn,
    errorBill,
    BILL_ERROR_INPUT_CLASS,
    BILL_ERROR_MESSAGE_CLASS
} from '../utils/variables.js';
import { checkInput } from './checkInput.js';
import { calculateTip } from './calculateTip.js';
import { getOnlyNumbers } from './getOnlyNumbers.js';
import { handleInputError } from './handleInputError.js';
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
        handleInputError(billInput, errorBill, BILL_ERROR_MESSAGE_CLASS, BILL_ERROR_INPUT_CLASS);
        billInput.focus();
        resetBillInput.clearInput();
        return;
    }

    if (checkInput(peopleAmount)) return;

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
        tip = customTipValue ? customTipValue : document.querySelector('.tip-form__percent-btn_state_active').dataset?.value
    }    

    calculateTip(bill, tip, peopleAmount);
}