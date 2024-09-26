type Animal = {
    type: string;
    legs: number;
};

type Sound = {
    voice: string;
};

type Organism = Animal & Sound;

const organism: Organism = {
    type: "Dog",
    legs: 4,
    voice: "woof woof"
};

console.log(organism);