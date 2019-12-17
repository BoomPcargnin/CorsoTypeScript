class Department {
    static fiscalYear = 2020;

    constructor(public readonly id:string, name: string = "Default") {
        // Non posso accedere alle static da qui col this
        // console.log(this.fiscalYear)
        // Posso usare direttamente la classe
        console.log(Department.fiscalYear)
    }

    static yearsFromTheAperture() {
        // Da metodo statici,
        // posso accedere a variabili statiche
        return this.fiscalYear - 1980
    }
}

console.log(Department.fiscalYear)


// Method più famosi nella classe Math:

Math.random()
Math.pow(12,2)
