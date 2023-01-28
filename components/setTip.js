import { billInput, peopleInput, customTip, percentBtn, resetBtn } from '../utils/variables.js';
import { calculateTip } from './calculateTip.js';
import { resetInput } from './resetInput.js';
import { enableButtons } from './enabledButtons.js';
import { validateInputs } from './validateInputs.js';

export function setTip(button) {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        let { value: tip } = e.target.dataset;
        
        const { value: bill } = billInput;
        const { value: peopleAmount } = peopleInput;

        const resetTipInput = new resetInput(customTip);
        resetTipInput.clearInput();

        if (validateInputs()) {
            calculateTip(bill, tip, peopleAmount);
            percentBtn.forEach((button) => button.classList.remove('form__btn_state_active'));
            button.classList.add('form__btn_state_active');
            resetBtn.classList.add('button_state_active');
            customTip.classList.add('form__input_state_active');
            enableButtons();
        }
    });
}