export class resetInput {
    
    input;

    constructor(input) {
        this.input = input;
    }

    clearInput() {
        return this.input.value = '';
    }
}