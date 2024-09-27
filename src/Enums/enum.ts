// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.


// Can be Number
enum Keys {
    Up = 1, // By default it's value is 0
    Down, // Automatically it's value will be 2 cause Up = 1
    Right,
    Left
}

function doSomething1(keyPressed: Keys){
    console.log(keyPressed);
}
doSomething1(Keys.Right);

// Can be String
enum Direction {
    East = "East",
    West = "West",
    North = "North",
    South = "South"
}

function doSomething2(disha: Direction){
    console.log(disha);
}
doSomething2(Direction.East);

// Common usecase in ExpressJS
enum statusCodes {
    Success = 200,
    NotFound = 404,
    Error = 500
}

function doSomething3(response: statusCodes){
    console.log(response);
}
doSomething3(statusCodes.Success);