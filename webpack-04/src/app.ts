import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

declare var GLOBAL : any;

console.log(GLOBAL)

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');


function add(num1,num2){
    if (typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2
    }
    return +num1 + +num2;
}

console.log(add("2","3"))//-> "23"