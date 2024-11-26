
function filterNumbers(arr, callback) { 
    for (let i = 0; i < arr.length; i++) { 
        arr[i] = callback(arr[i]); 
    } 
}  
let arrayNumbers = [1, 2, 3, 4]; 

function multiplyTwo(n) { 
    return n * 2;
} 
filterNumbers(arrayNumbers, multiplyTwo); 
console.log(arrayNumbers);

let arrayWords = ["pepe","juan","manolo","pescaito"];

function filterWords (arrayW, callBack) {
    for (let y = 0; y < arrayW.length; y++) {
        arrayW[y] = callBack(arrayW[y]);
    }
}
function toUpper (w) {
    return w.toUpperCase();
}
filterWords(arrayWords, toUpper);
console.log(arrayWords);

function factoNumbers (arrayNum, callBack) {
    for (let o = 0; o < arrayNum.length; o++) {
        arrayNum[o] = callBack(arrayNum[o]);
    }
}
let numberArray = [6,9,2,5,6];

function factorial(r){
    let res = 1;
    while (r > 1) {
        res *= r;
        r--;
    }
    return res;
}
factoNumbers(numberArray, factorial);
console.log(numberArray);