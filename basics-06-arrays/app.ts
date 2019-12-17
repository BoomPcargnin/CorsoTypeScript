// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: 'Paolo',
  age: 27,
  hobbies: ['Videogames', 'gatti']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
