class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    get value() {
        return this._value;
    }

    setValue(newValue) {
        this._value = newValue;
    }
}

class NumberInput extends Input {
    constructor(placeHolder) {
        super(placeHolder);
        this.type = "number";
    }
}

class Decorator extends Input {
    constructor(obj) {
        super(obj);
        this.obj = obj;
        this.valid = null;
    }
}

class AddRequiredValidation extends Decorator {
    constructor(obj) {
        super(obj);
    }

    setValue(newValue) {
        this.obj.setValue(newValue);
        if (!newValue) {
            this.valid = false;
            console.log(this.valid, 'because of required validation')
        } else {
            this.valid = true;
            console.log(this.valid, 'passed required validation');
        }
    }
}

class AddMaxLengthValidation extends Decorator {
    constructor(obj, maxLength) {
        super(obj);
        this.maxLength = maxLength;
    }

    setValue(newValue) {
        this.obj.setValue(newValue);
        if (newValue.toString().length > this.maxLength) {
            this.valid = false;
            console.log(this.valid, 'because of max length validation');
        } else {
            this.valid = true;
            console.log(this.valid, 'passed max length validation');
        }
    }
}

class AddNumberValidation extends Decorator {
    constructor(obj) {
        super(obj);
    }

    setValue(newValue) {
        this.obj.setValue(newValue);
        if (typeof newValue !== 'number') {
            this.valid = false;
            console.log(this.valid, 'because of number validation');
        } else {
            this.valid = true;
            console.log(this.valid, 'passed number validation');
        }
    }
}

let numberInput = new NumberInput("Type numbers...");

numberInput = new AddRequiredValidation(numberInput);
numberInput = new AddMaxLengthValidation(numberInput, 5);
numberInput = new AddNumberValidation(numberInput);

numberInput.setValue('');

/************************/
console.log('******************')

let numberInput1 = new NumberInput("Type numbers...");

numberInput1 = new AddRequiredValidation(numberInput1);
numberInput1 = new AddMaxLengthValidation(numberInput1, 5);
numberInput1 = new AddNumberValidation(numberInput1);

numberInput1.setValue('1345677');

/***********************/
console.log('******************');

let numberInput2 = new NumberInput("Type numbers...");

numberInput2 = new AddRequiredValidation(numberInput2);
numberInput2 = new AddMaxLengthValidation(numberInput2, 5);
numberInput2 = new AddNumberValidation(numberInput2);

numberInput2.setValue(1234);