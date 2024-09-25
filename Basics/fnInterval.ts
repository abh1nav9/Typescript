function run(work: (firstName: string, lastName: string) => string) {
    setTimeout(() => {
        const result = work("Abhinav", "Gautam");
        console.log(result);
    }, 1000);
}

function work(firstName: string, lastName: string): string {
    return firstName + " " + lastName;
}

run(work);
