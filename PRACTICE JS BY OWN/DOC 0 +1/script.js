var a = 5;
console.log(a);
var b = 78;
console.log(b);
var b= 80;
console.log(b);

// thats not applicable 
// let b = 78;
// console.log(b);
// let b= 80;
// console.log(b);

var num =9;
var bool = true;
var nu= null; // type of null is object
var sum ="sumit";
var sym = Symbol("this is a symbol");
var ud = undefined;
var bigInt= BigInt(1234567890123456789012345678901234567890);
var num1 = NaN; // Not a Number // type of a NaN is number
console.log(typeof num);
console.log(typeof bool);
console.log(typeof nu);
console.log(typeof sum);
console.log(typeof sym);
console.log(typeof ud);
console.log(typeof bigInt);
console.log(typeof num1);

const item={
    "storeName": "Amazon",
    "storeType": "Online",
    "Budget": 100000,
    "isOpen": true,
    "items": ["Books", "Electronics", "Clothing"],
    "My favorite Item": undefined
}
console.log(item);
console.log(item.items.length);
console.log(`the items contains total ${item.items.length} and they are ${item.items}` );

// problem 1
const sumitOfice ={
    "StoreName": "Sumit Ofice",
    "Store PhoneNo": 1234567890,
    "StudetsName": ["Sumit", "Amit", "Rohit", "Sahil"],
    "StudentsAge": [20, 21, 22, 23],
    "Students PhoneNo":[1234567890, 9876543210, 1122334455, 5566778899]

}
console.log(sumitOfice)
console.log(`The store name is ${sumitOfice.StoreName} and the phone number is ${sumitOfice["Store PhoneNo"]}`);

