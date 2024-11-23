const person = { name: 'piyush', age: 25 };

console.log(Object.keys(person))
Object.keys(person).map(keys=>{
    console.log("logging ",person[keys])
})