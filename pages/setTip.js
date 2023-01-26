import {
    billInput,
    peopleInput,
    customTip,
    percentBtn,
    resetBtn,
    errorBill,
    errorPeople,
    BILL_ERROR_INPUT_CLASS,
    BILL_ERROR_MESSAGE_CLASS,
    PEOPLE_ERROR_MESSAGE_CLASS,
    PEOPLE_ERROR_INPUT_CLASS
} from './variables.js';
import { checkInput } from './checkInput.js';
import { calculateTip } from './calculateTip.js';
import { resetInput } from './resetInput.js';
import { handleInputError } from './handleInputError.js';
import { enableButtons } from './enabledButtons.js';

export function setTip(button) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let tip = e.target.dataset.value;

        const bill = billInput.value;
        const peopleAmount = peopleInput.value;

        const resetTipInput = new resetInput(customTip);
        resetTipInput.clearInput();

        try {
            switch (true) {
                case checkInput(bill) && checkInput(peopleAmount):
                    handleInputError(billInput, errorBill, BILL_ERROR_MESSAGE_CLASS, BILL_ERROR_INPUT_CLASS);
                    handleInputError(peopleInput, errorPeople, PEOPLE_ERROR_MESSAGE_CLASS, PEOPLE_ERROR_INPUT_CLASS);
                    throw new Error('Both inputs are invalid. Make sure they are not empty and not equal 0');
                case checkInput(bill):
                    handleInputError(billInput, errorBill, BILL_ERROR_MESSAGE_CLASS, BILL_ERROR_INPUT_CLASS);
                    billInput.focus();
                    throw new Error('Bill input are invalid. Make sure he is are not empty and not equal 0');
                case checkInput(peopleAmount):
                    handleInputError(peopleInput, errorPeople, PEOPLE_ERROR_MESSAGE_CLASS, PEOPLE_ERROR_INPUT_CLASS);
                    peopleInput.focus();
                    throw new Error('People input are invalid. Make sure he is are not empty and not equal 0');
            }
        
            percentBtn.forEach((button) => button.classList.remove('tip-form__percent-btn_state_active'));
            button.classList.add('tip-form__percent-btn_state_active');
        
            calculateTip(bill, tip, peopleAmount);
        
            resetBtn.classList.add('total__reset-btn_state_active');
            customTip.classList.add('tip-form__custom-percent_state_active');
        
            enableButtons();
        } catch (error) {
            console.error(error);
        }        
    });
}
