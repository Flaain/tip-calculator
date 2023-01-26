import { handleInputError } from "../components/handleInputError.js";

export const billInput = document.querySelector('.form__input_type_bill');
export const peopleInput = document.querySelector('.form__input_type_people');
export const percentBtn = document.querySelectorAll('.form__btn');
export const totalTip = document.querySelector('.result__overall_type_tip');
export const totalMoney = document.querySelector('.result__overall_type_total');
export const customTip = document.querySelector('.form__input_type_custom');
export const resetBtn = document.querySelector('.button_type_reset');
export const tipForm = document.querySelector('.form');
export const errorPeople = document.querySelector('.error_type_people');
export const errorBill = document.querySelector('.error_type_bill');
export const billInputIcon = document.querySelector('.form__icon_type_bill');
export const peopleInputIcon = document.querySelector('.form__icon_type_people');

export const BILL_ICON_ERROR_CLASS = 'form__icon_state_error';
export const PEOPLE_ICON_ERROR_CLASS = 'form__icon_state_error';
export const BILL_ERROR_MESSAGE_CLASS = 'error_state_active';
export const BILL_ERROR_INPUT_CLASS = 'form__input_state_error';
export const PEOPLE_ERROR_MESSAGE_CLASS = 'error_state_active';
export const PEOPLE_ERROR_INPUT_CLASS = 'form__input_state_error';

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