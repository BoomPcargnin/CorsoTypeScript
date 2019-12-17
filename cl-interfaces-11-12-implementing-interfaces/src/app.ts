interface Named {
  name?: string;
  age?:number,
}
interface Greetable extends Named {
  // private age: number; non possibile, proprio come public
  readonly id : string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 27;
  id = '001';

  constructor(n?: string) {
    if (n){
      this.name = n;
    }
  }
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}


// const user : Greetable = {
//   name: 'Paolo',
//   age:27,
//   greet(prashe: string){
//     console.log(`${prashe} ${this.name}`)
//   }
// }


let user1: Greetable;
user1 = new Person('Paolo');
// user1.id = '002'
user1.greet('Hi there - I am');
console.log(user1);