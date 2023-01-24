import { billInput, peopleInput, customTip, percentBtn, resetBtn, error } from './variables.js';
import { checkInput } from './checkInput.js';
import { calculateTip } from './calculateTip.js';
import { resetInput } from './resetInput.js';

export function setTip(button) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let tip = e.target.dataset.value;
        let errorTimer;

        const bill = billInput.value;
        const peopleAmount = peopleInput.value;

        resetInput(customTip);

        switch(true) {
            case checkInput(bill):
                return;
            case checkInput(peopleAmount):
                error.classList.add('tip-form__people-error_state_active');
                errorTimer = setTimeout(() => error.classList.remove('tip-form__people-error_state_active'), 5000);
                peopleInput.classList.add('tip-form__people-input_state_error');
                peopleInput.focus();
                errorTimer = setTimeout(() => peopleInput.classList.remove('tip-form__people-input_state_error'), 5000);        
                return;
        }

        percentBtn.forEach((button) => button.classList.remove('tip-form__percent-btn_state_active'));
        button.classList.add('tip-form__percent-btn_state_active');

        calculateTip(bill, tip, peopleAmount);

        resetBtn.classList.add('total__reset-btn_state_active');
        customTip.classList.add('tip-form__custom-percent_state_active');

        resetBtn.disabled = false;
        customTip.disabled = false;
    });
}