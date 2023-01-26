export function checkInput(input) {
    return /^(0|\s*)$|^0+(?=[1-9])/gim.test(input);
}
