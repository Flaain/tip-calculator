import { handleInputError } from "../components/handleInputError.js";

export const billInput = document.querySelector('.tip-form__bill-input');
export const peopleInput = document.querySelector('.tip-form__people-input');
export const percentBtn = document.querySelectorAll('.tip-form__percent-btn');
export const totalTip = document.querySelector('.total__tip-amount');
export const totalMoney = document.querySelector('.total__amount-money');
export const customTip = document.querySelector('.tip-form__custom-percent');
export const resetBtn = document.querySelector('.total__reset-btn');
export const tipForm = document.querySelector('.tip-form');
export const errorPeople = document.querySelector('.tip-form__people-error');
export const errorBill = document.querySelector('.tip-form__bill-error');
export const billInputIcon = document.querySelector('.tip-form__bill-icon');
export const peopleInputIcon = document.querySelector('.tip-form__people-icon');

export const BILL_ICON_ERROR_CLASS = 'tip-form__bill-icon_state_error';
export const PEOPLE_ICON_ERROR_CLASS = 'tip-form__people-icon_state_error';
export const BILL_ERROR_MESSAGE_CLASS = 'tip-form__bill-error_state_active';
export const BILL_ERROR_INPUT_CLASS = 'tip-form__bill-input_state_error';
export const PEOPLE_ERROR_MESSAGE_CLASS = 'tip-form__people-error_state_active';
export const PEOPLE_ERROR_INPUT_CLASS = 'tip-form__people-input_state_error';

export const errorBillInput = new handleInputError(
    billInput, 
    errorBill, 
    BILL_ERROR_INPUT_CLASS, 
    BILL_ERROR_MESSAGE_CLASS, 
    billInputIcon, 
    BILL_ICON_ERROR_CLASS
);
export const errorPeopleInput = new handleInputError(
    peopleInput, 
    errorPeople, 
    PEOPLE_ERROR_INPUT_CLASS, 
    PEOPLE_ERROR_MESSAGE_CLASS, 
    peopleInputIcon, 
    PEOPLE_ICON_ERROR_CLASS
); 