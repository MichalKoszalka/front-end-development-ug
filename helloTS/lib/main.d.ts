interface Person {
    name: string;
    yob: number;
}
declare class Student {
    name: string;
    yob: number;
    constructor(name: string, yob: number);
}
declare let zenek: Student;
declare function sayHello(person: Person): void;
declare let ziutek: {
    name: string;
    yob: number;
};
declare let myList: Person[];
declare let myTuple: [string, number];
declare enum Color {
    "Red" = 0,
    "Greed" = 1,
    "Blue" = 2,
}
