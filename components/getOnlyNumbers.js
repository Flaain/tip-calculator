export function getOnlyNumbers(input) {
    return input.replace(/^\.|[^\d.]/gim, '')
}