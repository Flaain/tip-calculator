import { percentBtn } from "../utils/variables.js";

export function getActiveTip(button, customTip) {
    let tip;

    if (!button && !customTip) {
        percentBtn.forEach((button) => {
            const {dataset: {value}} = button;
            if (parseFloat(value) === 5) {
                button.classList.add('form__btn_state_active');
                return tip = value;
            }
        });
    } else {
       tip = customTip || button?.dataset.value
    }  

    return tip;
}