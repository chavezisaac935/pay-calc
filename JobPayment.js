class JobPayment {
    constructor(regularHours, regularPayRate, stateAbbreviation) {
        this._regularHours = regularHours;
        this._regularPayRate = regularPayRate;
        this._stateAbbreviation = stateAbbreviation;
    }

    get regularHours(){
        return this._regularHours;
    }

    get regularPayRate() {
        return this._regularPayRate;
    }

    get stateAbreviation() {
        return this._stateAbbreviation;
    }

    calculateGrossPay() {
        return this._regularHours * this._regularPayRate;
    }
}

export default JobPayment;