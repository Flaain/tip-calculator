import {tipForm, totalTip, totalMoney, resetBtn, customTip, percentBtn} from './variables.js'

export function reset(e) {
    e?.preventDefault();
    tipForm.reset();

    totalTip.textContent = `$0.00`;
    totalMoney.textContent = `$0.00`;

    totalTip.removeAttribute('title');
    totalMoney.removeAttribute('title');

    resetBtn.disabled = true;
    customTip.disabled = true;

    resetBtn.classList.remove('total__reset-btn_state_active');
    customTip.classList.remove('tip-form__custom-percent_state_active');

    percentBtn.forEach((button) => button.classList.remove('tip-form__percent-btn_state_active'));
}