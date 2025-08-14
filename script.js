/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */

function sleep_in(weekday,vacation){
    return vacation;
}

function string_times(str,num){
    return str;
}

function countEvens(arr){
let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            count++;
        }
    }
    return count
}

function countHi(string){
let count = 0;
    for(let i = 0; i < string.length-1; i++){
        if(string[i] === "h" && string[i+1] === "i"){
            count++;
        }
    }
    return count;
}

function no14(arr){
    return !(arr.includes(4) && arr.includes(1))
}

function either24(arr){
let dub2 = false
let dub4 = false
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 2 && arr[i+1] === 2){
            dub2 = true
        } else if(arr[i] === 4 && arr[i+1] === 4){
            dub4 = true
        }
    }
    return (dub2 || dub4) && !(dub2 && dub4);
}

function makeChocolate(small, big, goal){
let leftover = goal%5;
let enoughbig = big >= (goal-leftover)/5
let enoughsmall = small >= (goal - (big*5))
if(enoughbig && enoughsmall){
    return leftover;
}else if(!enoughbig && enoughsmall){
    return goal-(big*5);
}else{
    return -1;
}
}

function luckySum(a, b, c){
    let count = 0
    let arr = [a, b, c]
    for(let i = 0; i<Math.max(arr.indexOf(13); i++){
        count+=arr[i];
    }
    return count
}
