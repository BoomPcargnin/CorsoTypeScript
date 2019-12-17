import * as decorators from './decorators'

@decorators.Logger('LOGGING')
@decorators.WithTemplate('<h1>My Person Object</h1>', 'app')
class Person  {
    name = 'Paolo';
  
    constructor() {
      console.log('Creating person object...');
    }
  }

export default Person