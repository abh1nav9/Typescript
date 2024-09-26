interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(a: string, b: number) {
        this.name = a;
        this.age = b;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

const e = new Employee("Abhinav", 21);
e.greet("Hello");
