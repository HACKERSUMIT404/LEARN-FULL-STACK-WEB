console.log("sumit pal");
let random = Math.random();
let a = prompt("Enter 1st number");
let c = prompt("Enter the operation");
let b = prompt("Enter 2nd number");

let obj ={
    "+":"-",
    "-":"*",
    "*":"/",
    "/":"+"

}

if ( random > 0.1) {
    console.log(`the result is ${a} ${c} ${b}`);
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);

} else {
    c = obj[c];
}