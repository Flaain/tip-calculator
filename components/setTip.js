import { billInput, peopleInput, customTip, percentBtn, resetBtn, errorBillInput, errorPeopleInput } from '../utils/variables.js';
import { checkInput } from './checkInput.js';
import { calculateTip } from './calculateTip.js';
import { resetInput } from './resetInput.js';
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
                    errorBillInput.throwError();
                    errorPeopleInput.throwError();
                    throw new Error('Both inputs are invalid. Make sure they are not empty and not equal 0');
                case checkInput(bill):
                    errorBillInput.throwError();
                    billInput.focus();
                    throw new Error('Bill input are invalid. Make sure he is are not empty and not equal 0');
                case checkInput(peopleAmount):
                    errorPeopleInput.throwError();
                    peopleInput.focus();
                    throw new Error('People input are invalid. Make sure he is are not empty and not equal 0');
            }
        
            percentBtn.forEach((button) => button.classList.remove('form__btn_state_active'));
            button.classList.add('form__btn_state_active');
        
            calculateTip(bill, tip, peopleAmount);
        
            resetBtn.classList.add('button_state_active');
            customTip.classList.add('form__input_state_active');
        
            enableButtons();
        } catch (error) {
            console.error(error);
        }        
    });
}
