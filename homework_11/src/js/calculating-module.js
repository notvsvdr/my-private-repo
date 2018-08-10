export const calculator = {

    subtraction: (first, second) => {
        return parseFloat(first) - parseFloat(second);
    },

    addition: (first, second) => {
        return parseFloat(first) + parseFloat(second);
    },

    multiplication: (first, second) => {
        return parseFloat(first) * parseFloat(second);
    },

    division: (first, second) => {
        if (parseFloat(second) === 0) {
            return 'Devision by zero?';
        }
        return parseFloat(first) / parseFloat(second);
    }
}