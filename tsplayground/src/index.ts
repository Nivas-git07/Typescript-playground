let names: string = "nivas";
console.log(names)

let numbers: number = 10;
console.log(numbers)

let isTrue: boolean = true;
console.log(isTrue)

let anytype: any = "hello";
anytype = 100;

console.log(anytype)

const result = (a: number, b: number) => a * b;
console.log(result(10, 20))

function name(namess: string = "nivas") {
    console.log("hello" + namess)
}
name();
//annotation of return value
function add(a: number): number {
    return a + a;
}
console.log(add(10))
//no return value of the function using void type
function noreturn(msg: string): void {
    console.log(`this is a ${msg}`)

}
noreturn("message")

//never keyword used to indicate tha a function will never return a value
//it is used in function throws an error or infinte loop
// function throwerror(msg: string): never {
//     throw new Error(msg);
// }
// try {
//     throwerror("this is a error message");
// } catch (error) {
//     console.error("Caught an error:", error);
// }


// let x: never;

// function infiniteloop(): never {
//     while (true) { }
// }
// x = infiniteloop()

// arraytype
let arr: number[] = [0, 1, 2, 3, 4, 5];
arr.push(6);
arr.push(7);
arr.pop();
console.log(arr);
//another way to define array type
let arr2: Array<string> = ["nivas", "sharmi", "saravanesh", "pooja"];
arr2.pop();
arr2.pop();
arr2.push("sharmila");
console.log(arr2)

//object function return type
function getuser(names:string, ages:number, locations:string): { name: string, age: number, location: string } {
    return{
        name:names,
        age: ages,
        location: locations
    }
}
let user = getuser("nivas",25 , "madurai");
console.log(user)

// alias type

type User = {
  name: string;
  age: number;
  location: string;
};

const getuser2 = (user: User): string => {
  return `Name is ${user.name} and age is ${user.age} and location is ${user.location}`;
};

let result2 = getuser2({ name: "nivas", age: 25, location: "madurai" });
console.log(result2);
