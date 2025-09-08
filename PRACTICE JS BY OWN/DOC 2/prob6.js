//Calculathe factorial of a number:-
let a = parseInt(prompt("Enter a number:"));
if (a === 0 || a === 1) {
    console.log("1");
} else {
    let result = 1;
    for (let i = 2; i <= a; i++) {
        result *= i;
    }
    console.log(`The factorial of the number is ${result}`);
}
    


