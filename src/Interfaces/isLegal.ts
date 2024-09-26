
// What is an Interface? Giving type to an object.

// Definign a Interface
interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function isLegal(user: User): boolean {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}

const user = {
    firstName: "Abhinav",
    lastName: "Gautam",
    age: 21
}

console.log(isLegal(user));

/* Can also be done like this ->

console.log(isLegal({
    firstName: "Abhinav",
    lastName: "Gautam",
    age: 21
}));

*/
