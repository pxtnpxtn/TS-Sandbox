// Simple
let myString: string;
let myNum: number;
let myBool: boolean;
let myAny: any;

myString = "Yay";
myNum = 10;
myBool = true;
myAny = false;

// Arrays of..
// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

strArr = ["Hello", "world"];
numArr = [1, 2, 3];
boolArr = [true, false, true];

// Tuple - Array with defined number of elements *in order*
let strNumTuple: [string, number];

strNumTuple = ["Hello", 10];

// Void - Null or Undefined
let myVoid: void = undefined;
