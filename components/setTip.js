import { billInput, peopleInput, customTip, percentBtn, resetBtn } from '../utils/variables.js';
import { calculateTip } from './calculateTip.js';
import { resetInput } from './resetInput.js';
import { enableButtons } from './enabledButtons.js';
import { validateInputs } from './validateInputs.js';

export function setTip(button) {

    const resetTipInput = new resetInput(customTip);
    
    button.addEventListener('click', (e) => {
        e.preventDefault();
        resetTipInput.clearInput();

        const { value: bill } = billInput;
        const { value: peopleAmount } = peopleInput;
        let { value: tip } = e.target.dataset;

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