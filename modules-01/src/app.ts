import "moment"
import * as decorators from './decorators'
import Person from './Person'

const pers = new Person();

console.log(pers);

// ---

class Product {
  @decorators.Log
  title: string;
  private _price: number;

  @decorators.Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @decorators.Log3
  getPriceWithTax(@decorators.Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

console.log(new Product('Car',30))
