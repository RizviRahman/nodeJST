const {people,age} = require('./people');

console.log(people, age);

for(let i = 0; i<4; i++){
    console.log(`${people[i]} is ${age[i]} years old.`)
}