class JobPayment {
    constructor(regularHours, regularPayRate, stateAbreviation) {
        this.regularHours = regularHours;
        this.regularPayRate = regularPayRate;
        this.stateAbreviation = stateAbreviation;
    }

    get regularHours(){
        return this.regularHours;
    }

    get regularPayRate() {
        return this.regularPayRate;
    }

    get stateAbreviation() {
        return this.stateAbreviation;
    }

    calculateGrossPay() {
        return this.regularHours * this.regularPayRate;
    }
}