import {tipForm, totalTip, totalMoney, resetBtn, customTip, percentBtn} from '../utils/variables.js'
import { disabledButtons } from './disabledButtons.js';

export function reset(e) {
    e?.preventDefault();
    tipForm.reset();

    totalTip.textContent = `$0.00`;
    totalMoney.textContent = `$0.00`;

    totalTip.removeAttribute('title');
    totalMoney.removeAttribute('title');

    disabledButtons();

    resetBtn.classList.remove('button_state_active');
    customTip.classList.remove('form__input_state_active');

    percentBtn.forEach((button) => button.classList.remove('form__btn_state_active'));
}