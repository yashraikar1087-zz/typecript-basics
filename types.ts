let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

//--------------ARRAY------------

// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];
//can also define arrays in another way

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

// -------------------------------
// console.log(myString);
// console.log(myNum);
// console.log(myBool);
// console.log(myVar);
//--------------Tuple is basically an array which defined number of elements---------
let strNumTuple: [string, number];

myString = "HEllo world";
myNum = 22;
myBool = true;
myVar = 5;

strArr = ["HEllo", "World"];
numArr = [1, 2, 3];

strNumTuple = ["test", 3];

console.log(strArr);

//-------other types
let myVoid: void = null;
let myNull: null = null;
let myUndef: undefined = undefined;

console.log(myVoid);
