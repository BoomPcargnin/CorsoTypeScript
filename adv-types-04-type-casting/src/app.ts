

// Specificando il tipo di elemento html
// TypeScript sa che possiamo accedere a "value"
const firstInputElement = document.querySelector('input')!;
const {value : val} = firstInputElement;


const secondInputElement = document.querySelector('#input');
// const {value : val2} = secondInputElement;



const userInputElement1 = <HTMLInputElement>document.getElementById('user-input')!;

const userInputElement2 = document.getElementById('user-input') as HTMLInputElement;

const userInputElement3 = document.getElementById('user-input')!;
if (userInputElement3) {
  (userInputElement3 as HTMLInputElement).value = 'Hi there!';
}

function getValue({value: val}:HTMLInputElement){
  console.log(val)
}