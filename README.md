# TypeScript Learning Repository

Welcome to my TypeScript learning repository! In this project, I document my journey through learning various key concepts of TypeScript.

## Concepts Covered

### 1. **Arrays**
   - How to define arrays with type annotations.
   - Example: 
     ```typescript
     let numbers: number[] = [1, 2, 3, 4];
     ```

### 2. **Data Types**
   - Learning the different primitive and complex types.
   - Example:
     ```typescript
     let isDone: boolean = false;
     let count: number = 5;
     let message: string = "Hello, TypeScript!";
     ```

### 3. **Enums**
   - Defining enumerations for better code structure.
   - Example:
     ```typescript
     enum Direction {
       Up,
       Down,
       Left,
       Right
     }
     let move: Direction = Direction.Up;
     ```

### 4. **Generics**
   - Understanding generic types to create reusable components.
   - Example:
     ```typescript
     function identity<T>(arg: T): T {
       return arg;
     }
     ```

### 5. **Type**
   - Learning how to define custom types for more flexibility.
   - Example:
     ```typescript
     type User = {
       name: string;
       age: number;
     };
     ```

### 6. **Interface**
   - Defining interfaces to describe object shapes.
   - Example:
     ```typescript
     interface Person {
       name: string;
       age: number;
     }

     let user: Person = { name: "Alice", age: 25 };
     ```

## How to Use

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/typescript-learning.git
