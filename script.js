/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */


function countHi(string){
    if(string[1] == null){
        return 0;
    }
    if(string[0] === "h" && string[1] === "i"){
        return 1 + countHi(string.substring(1));
    }else {
        return 0 + countHi(string.substring(1));
    }
}

function fibonacci(n){
    if(n === 0){
        return 0;
    }else if(n===1){
        return 1;
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

function triangle(n){
    if(n === 0){
        return 0
    }else{
        return n + triangle(n-1)
    }
}

function reverseString(string){
    if(string.length === 0){
        return "";
    }else{
        return string[string.length-1] + reverseString(string.slice(0, string.length - 1))
    }
}

function palindrome(string){
    return reverseString(string) === string
}

function sumDigits(num){
    if(num === 0){
        return 0;
    }else if(num%10 === 0){
        return sumDigits(num/10)
    }else{
        return 1 + sumDigits(num-1)
    }
}

function binarySearch(arr, value){
    let low = 0;
    let high = arr.length - 1;
    let mid = (low+high)/2
    if(arr[mid] === value){
        return mid
    }else if(arr[mid] < value){
        console.log(arr, arr[mid], arr.slice(mid + 1))
        return binarySearch(arr.slice(mid + 1), value)
    }else if(arr[mid] > value){
        console.log(arr, arr[mid], arr.slice(mid + 1))
        return binarySearch(arr.slice(0, mid-1), value)
    }else{
        return -1
    }
}
