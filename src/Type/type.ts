
// Type can't be used to implement a Class

type Human = {
    name: string;
    age: number;
}

/*

Differences Between Interface and Type:
Interfaces are more suited for defining the structure of an object and can be extended or merged.
Types are more flexible and can represent more complex scenarios beyond just object structures.
Types cannot be re-opened to add new properties, while interfaces can be extended.
When to Use Each:
Use interfaces when you need to define the shape of an object and expect that shape to be extended or used in various parts of your application.
Use types when you need more flexibility or when you're dealing with unions, intersections, or other advanced type manipulations.

*/
