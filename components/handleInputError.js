export function handleInputError(input, typeError, errorMessageClass, inputErrorClass, iconType, inputIconErrorClass) {
    typeError.classList.add(errorMessageClass);
    input.classList.add(inputErrorClass);
    iconType.classList.add(inputIconErrorClass);
    setTimeout(() => {
        typeError.classList.remove(errorMessageClass);
        input.classList.remove(inputErrorClass);
        iconType.classList.remove(inputIconErrorClass);
    }, 5000);
}