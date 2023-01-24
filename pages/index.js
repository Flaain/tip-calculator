import { billInput, percentBtn, customTip, peopleInput, resetBtn } from './variables.js';
import { setBill } from './setBill.js';
import { setTip } from './setTip.js';
import { setCustomTip } from './setCustomTip.js';
import { setAmountOfPeople } from './setAmountOfPeople.js';
import { reset } from './reset.js';

billInput.addEventListener('input', setBill);
percentBtn.forEach(setTip);
customTip.addEventListener('input', setCustomTip);
peopleInput.addEventListener('input', setAmountOfPeople);
resetBtn.addEventListener('click', reset);