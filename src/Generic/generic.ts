function firstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(firstElement<number>([1, 2, 3, 4, 5]));
const a: string = firstElement<string>(["a", "b", "c", "d", "e"]); 

console.log(a.toLowerCase()); 
