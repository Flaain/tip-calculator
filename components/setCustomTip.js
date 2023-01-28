import { billInput, peopleInput, percentBtn, resetBtn, customTip } from '../utils/variables.js';
import { checkInput } from './checkInput.js';
import { calculateTip } from './calculateTip.js';
import { getOnlyNumbers } from './getOnlyNumbers.js';
import { enableButtons } from './enabledButtons.js';
import { getActiveTip } from './getActiveTip.js';

export function setCustomTip(e) {
    e.preventDefault();

    const activeButton = Array.from(percentBtn).find((button) => button.classList.contains('form__btn_state_active'));
    const { value: bill } = billInput;
    const { value: peopleAmount } = peopleInput;
    const { value: customTipValue } = this;

    this.value = getOnlyNumbers(customTipValue);
    

    if(!checkInput(customTipValue)) {
        percentBtn.forEach((button) => button.classList.remove('form__btn_state_active'));
    }

    const tip = getActiveTip(activeButton, customTipValue);
    enableButtons();

    resetBtn.classList.add('button_state_active');
    customTip.classList.add('form__input_state_active');

    calculateTip(bill, tip, peopleAmount);
}