type Person = {
    name:string;
    age: number;
}

type employee = {
    id : number;
    title: string;
}

type newuser =  Person & employee; //intersection type


const getuser3 = (user: newuser): string => {
    return `Name is ${user.name} and age is ${user.age} and id is ${user.id} and title is ${user.title}`;
};

let items: Person | employee = {
    name: "nivas",
    id:1,
    title: "developer"
}
console.log(items);
 
let color : "red" | "green" | "blue" //literal type

color = "red"; //valid
// color = "yellow"; //invalid
console.log(color);