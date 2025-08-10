class person {
    readonly name: string;
    readonly id: number;
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const p1 = new person("nivas", 1);
console.log(p1)

class person2{
    public name: string;
    private id: number;
    protected department: string ;
    constructor(name: string,id: number , department: string) {
        this.name = name;
        this.id = id;
        this.department = department;
    }
    getname():string{
        return `name is ${this.name} and id is${this.id} and department is ${this.department}`;
    }
    protected project(): string{
        return `the ${this.name} is working in ${this.department} department`;
    }
}
class manager extends person2{
    constructor(name: string,id: number, department: string) {
        super(name, id, department);
    }
    getproject(): string{
        return this.project()
    }

}
const m1 = new manager("pooja", 1 , "HR");
console.log(m1.getproject());
const p2 =new person2("saravanesh", 2, "devops");
const p3 = new person2("nivas", 3,"developer");

console.log(p2.getname());
console.log(p3.getname())
 
// getter and setter
class myclass{
    private _myporperty: number = 0;

    get myproperty(): number {
        return this._myporperty;
    }
    set myproperty(value: number) {
        this._myporperty = value;
}

}

const myinstance = new myclass();

console.log(myinstance.myproperty);

myinstance.myproperty = 1000;

console.log(myinstance.myproperty);