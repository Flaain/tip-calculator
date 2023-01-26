export class handleInputError {
    input;
    typeError;
    errorMessageClass;
    errorInputClass;
    iconType;
    errorIconClass;

    constructor(input, typeInput, eInputClass, eMessageClass, typeIcon, eIconClass) {
        this.input = input;
        this.typeError = typeInput;
        this.errorMessageClass = eMessageClass;
        this.errorInputClass = eInputClass;
        this.iconType = typeIcon;
        this.errorIconClass = eIconClass;
    }

    throwError(duration = 5000) {
        this.input.classList.add(this.errorInputClass);
        this.typeError.classList.add(this.errorMessageClass);
        this.iconType.classList.add(this.errorIconClass);
        setTimeout(() => {
            this.clearError();
        }, duration);
    }

    clearError() {
        this.input.classList.remove(this.errorInputClass);
        this.typeError.classList.remove(this.errorMessageClass);
        this.iconType.classList.remove(this.errorIconClass);
    }
}