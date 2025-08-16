interface Computer {
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

interface mathoperation {
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

function greet(person: person) {
    console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
    person.sayhello();
}

const person1: person = {
    name: "nivas",
    age: 25,
    sayhello: () => {
        console.log("Say hello to everyone!");
    }

}
const person2: person = {
    name: "saravanesh",
    age: 30,
    sayhello: () => {
        console.log("Hello from Saravanesh!");
    }
}
greet(person1);
greet(person2)

interface moviedetails {
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
    printinfo: function () {
        console.log(`Title: ${this.title}, Director: ${this.director}, Release Year: ${this.releaseyear}, Genre: ${this.genre}`);
    }
}
movie1.printinfo();

// interface merging
interface car {
    brand: string;
    start(): void;
}
interface car {
    model: string;
    stop(): void;
}

const mycar: car = {
    brand: "BMW",
    model: "X5",
    start() {
        console.log(`The ${this.brand} ${this.model} is starting.`);

    },
    stop() {
        console.log(`The ${this.brand} ${this.model} is stopping.`);
    }
}

mycar.start();
mycar.stop();

// generic function
function identity<t>(arg: t): t {
    return arg;
}
const result1 = identity<string>("Hello, TypeScript!");
const result2 = identity<number>(42);
const result3 = identity<boolean>(true);
console.log(result1); // Output: Hello, TypeScript!
console.log(result2); // Output: 42
console.log(result3); // Output: true

//genric interface
function uniquedatatype<T>(item: T, defaultvalue: T): T {
    return item || defaultvalue;
}
interface dog {
    name: string;
    breed: string;
}

const dog = uniquedatatype<dog>({ name: "Buddy", breed: "Golden Retriever" }, { name: "Max", breed: "Labrador" });

console.log(dog);

function arrayfilter<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter(condition);
}
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = arrayfilter<number>(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);

class box<T>{
    private content: T;
    constructor(initalcontent: T){
        this.content = initalcontent;
    }
    getcontent(): T{
        return this.content;
    }
    setcontent(newcontent: T): void{
        this.content = newcontent;
    }
}
const stringBox = new box<string>("Hello, World!");
console.log(stringBox.getcontent()); // Output: Hello, World!
stringBox.setcontent("New Content");
console.log(stringBox.getcontent()); // Output: New Content

type value = number | string | boolean;
function processvalue(value: value): void {
    if (typeof value === "number") {
        console.log(`Processing number: ${value.toFixed()}`);
    } else if (typeof value === "string") {
        console.log(`Processing string: ${value.toUpperCase()}`);
    } else if (typeof value === "boolean") {
        console.log(`Processing boolean: ${value}`);
    }
}
processvalue(42); // Output: Processing number: 42
processvalue("Hello"); // Output: Processing string: HELLO
processvalue(true); // Output: Processing boolean: true

class Dog {
    bark(): void {
        console.log("Woof! Woof!");
    }
}
class cat {
    meow(): void {
        console.log("Meow! Meow!");
    }
}

function animalsound(animal: Dog | cat): void {
    if (animal instanceof Dog) {
        animal.bark();
    } else if (animal instanceof cat) {
        animal.meow();
    }
}
const myDog = new Dog();
const myCat = new cat();
animalsound(myDog); // Output: Woof! Woof!
animalsound(myCat); // Output: Meow! Meow!

type employees = {
    name: string;
    age: number;
}

type manager = {
    department: string;
    role: string;
}
type employeeDetails = employees & manager;
const manager1: employeeDetails = {
    name: "nivas",
    age: 18,
    department: "IT",
    role: "Software Engineer"

}
console.log(manager1);