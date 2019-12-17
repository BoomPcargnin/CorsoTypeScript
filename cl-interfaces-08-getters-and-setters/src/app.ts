class Department {
  protected employee: string[] = []

  get lastEmployee(){
      return this.employee[this.employee.length - 1]
  }

  set lastEmployee(value:string){
      if (!value){
          throw new Error( "You must pass a correct value")
      }
      this.addEmployee(value)

  }

  constructor(public readonly id:string, name: string = "Default") {
  }

  private addEmployee(value:string){
      this.employee.push(value)
  }
}

class ITDepartment extends Department{
    documentations : string[];

    constructor(id: string, documentations: string[]){
      super(id,'IT')
      this.documentations = documentations
    }

  addITEmployee(name:string){
      this.employee.push(name)
  }
}

const itDep = new ITDepartment('it001',['Angular Docs'])
const {lastEmployee} = itDep;
itDep.lastEmployee = 'Marco' //set new employee