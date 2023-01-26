export function handleInputError(input, typeError, errorMessageClass, inputErrorClass) {
    typeError.classList.add(errorMessageClass);
    input.classList.add(inputErrorClass);
    setTimeout(() => {
        typeError.classList.remove(errorMessageClass);
        input.classList.remove(inputErrorClass);
    }, 5000);
}