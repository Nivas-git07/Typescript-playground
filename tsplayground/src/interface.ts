interface Computer{
    name: string;
    ram: number;
    processor: string;
    storage: number;
    
}
const Computer1: Computer = {
    name: "Asusvivobook",
    ram: 16,
    processor: "i5 12th gen 12500H",
    storage: 512
}

console.log(Computer1);
console.log(Computer1.name);
console.log(Computer1.ram);
console.log(Computer1.processor);
console.log(Computer1.storage); 

interface mathoperation{
    (a: number, b: number): number;
}
const add: mathoperation = (a, b) => {
    return a + b;
}
const subtract: mathoperation = (a, b) => {
    return a - b;
}

interface person {
    name: string;
    age: number;
    sayhello(): void;
}

function greet(person: person){
    console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
    person.sayhello();
}

const person1:person= {
    name: "nivas",
    age: 25,
    sayhello: () => {
        console.log("Say hello to everyone!");
}

}
const person2:person = {
    name: "saravanesh",
    age: 30,
    sayhello: () => {
        console.log("Hello from Saravanesh!");
    }
}
greet(person1);
greet(person2)

interface moviedetails{
    title: string;
    director: string;
    releaseyear: number;
    printinfo(): void;
}

interface moviegenre extends moviedetails {
    genre: string;
}

const movie1: moviegenre = {
    title: "coolie",
    director: "loki",
    releaseyear: 2025,
    genre: "action",
    printinfo: function() {
        console.log(`Title: ${this.title}, Director: ${this.director}, Release Year: ${this.releaseyear}, Genre: ${this.genre}`);
}
}
movie1.printinfo();