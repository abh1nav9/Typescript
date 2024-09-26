
type StringOrNumber = string | number;

function printId(id: StringOrNumber){
    console.log(`ID : ${id}`);
}

printId(101);
printId("101");