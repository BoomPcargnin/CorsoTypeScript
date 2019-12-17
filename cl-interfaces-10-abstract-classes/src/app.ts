abstract class Department {
    static fiscalYear = 2020;
    abstract describe() : void;
    
    constructor(public readonly id:string, _name: string) {
    }
}

class ItDepartment extends Department {

    constructor(name:string){
        super('it-dep',name)
    }

    describe(){
        console.log(`IT department: ${this.name}`)
    }
}