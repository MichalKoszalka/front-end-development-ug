interface Person {
    name: string;
    yob: number;
}

class Student {
    constructor(public name: string, public yob: number) {
        this.name = name;
        this.yob = yob;
    }
}

let zenek = new Student('Zenon', 2006);
console.log(zenek.name);

function sayHello(person: Person) {
    console.log(`Hello ${person.name}`);
}

let ziutek = { name: 'Ziutek', yob: 2006 };

let myList: Person[] = [ziutek, zenek];
let myTuple: [string, number] = ["Fiat", 1998];

console.log(myTuple[0]);
sayHello(ziutek);
sayHello(zenek);

enum Color {"Red", "Greed", "Blue"};
console.log(Color.Red);

let something: any = 5;
something = "Hello";
something = false;