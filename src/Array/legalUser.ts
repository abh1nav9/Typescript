interface USer {
    name: string;
    age: number;
}

const list: USer[] = [
    { name: "Abhinav", age: 21 },
    { name: "Gautam", age: 15 }
];

function isLegal(user: USer): boolean {
    return user.age >= 18;
}

list.forEach((user) => {
    console.log(`${user.name} is legal: ${isLegal(user)}`);
});
