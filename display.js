class Display {
    constructor(pastValueDisplay,newValueDisplay){
        this.newValueDisplay = newValueDisplay;
        this.pastValueDisplay = pastValueDisplay;
        this.calculator = new Calculator();
        this.typeOfOperation = undefined
        this.newValue = '';
        this.pastValue = '';
        this.signes = {
            plus: '+',
            minus: '-',
            times: 'X',
            dividedBy: '/'
        }
    }

    delete(){
        this.newValue = this.newValue.toString().slice(0, -1);
        this.printValue();
    }

    deleteAll(){
        this.newValue = '';
        this.pastValue= '';
        this.typeOfOperation = undefined;
        this.printValue();

    }

    compute(type){
        this.typeOfOperation !== 'equalTo' && this.calculate();
        this.typeOfOperation = type;
        this.pastValue = this.newValue || this.pastValue;
        this.newValue = '';
        this.printValue();

    }

    addNumber(number){
        if(number === '.' && this.newValue.includes('.')) return
        this.newValue = this.newValue.toString() + number.toString();
        this.printValue();
    }

    printValue(){
        this.newValueDisplay.textContent = this.newValue;
        this.pastValueDisplay.textContent = `${this.pastValue} ${this.signes[this.typeOfOperation] || ''} `;
    }

    calculate(){
        const pastValue = parseFloat(this.pastValue);
        const newValue = parseFloat(this.newValue);

        if(isNaN(newValue) || isNaN(pastValue)) return
        this.newValue = this.calculator[this.typeOfOperation](pastValue,newValue);
    }


}
