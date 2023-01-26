import { billInput, percentBtn, customTip, peopleInput, resetBtn } from '../utils/variables.js';
import { setBill } from '../components/setBill.js';
import { setTip } from '../components/setTip.js';
import { setCustomTip } from '../components/setCustomTip.js';
import { setAmountOfPeople } from '../components/setAmountOfPeople.js';
import { reset } from '../components/reset.js';

billInput.addEventListener('input', setBill);
percentBtn.forEach(setTip);
customTip.addEventListener('input', setCustomTip);
peopleInput.addEventListener('input', setAmountOfPeople);
resetBtn.addEventListener('click', reset);