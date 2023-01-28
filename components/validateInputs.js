import { billInput, peopleInput, errorBillInput, errorPeopleInput } from '../utils/variables.js';
import { checkInput } from './checkInput.js';

export function validateInputs() {
    const bill = billInput.value;
    const peopleAmount = peopleInput.value;

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
            default:
                return true;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}
