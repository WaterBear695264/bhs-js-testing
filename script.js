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
    let a = num.toString();
    if()
}
