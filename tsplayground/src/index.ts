let names: string = "nivas";
console.log(names)

let numbers: number = 10;
console.log(numbers)

let isTrue: boolean = true;
console.log(isTrue)

let anytype: any = "hello";
anytype = 100;

console.log(anytype)

const result = (a: number,b: number) => a * b;
console.log(result(10,20))

function name(namess: string = "nivas"){
    console.log("hello" + namess)
}
name();
