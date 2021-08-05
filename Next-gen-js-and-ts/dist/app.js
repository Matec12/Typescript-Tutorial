"use strict";
// const userName = 'Ibrahim';
// // userName = 'Adedeji';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// let age = 30;
// age = 29;
// function add(a: number, b: number){
//   let result;
//   result = a +b;
//   return result;
// }
// if (age > 20){
//   let isOld = true;
// }
// console.log(result);
// console.log(isOld);
// const add = (a: number, b:number = 1) => a + b;
// console.log(add (2, 5));
// // const printOutput = (output: string | number) => console.log(output);
// const printOutput : (a: string | number) => void = output => console.log(output);
// const button = document.querySelector("button");
// if (button){
//   button.addEventListener('click', event => console.log(event));
// }
// printOutput(add(5));
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = __spreadArray(['Hiking'], hobbies);
// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push.apply(activeHobbies, __spreadArray(['Running'], hobbies));
console.log(activeHobbies);
var person = {
    firstName: 'Max',
    age: 30
};
var copiedPerson = __assign({}, person);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
var hobby1 = hobbies[0], remainingHobbies = hobbies.slice(1);
console.log(remainingHobbies);
var userName = person.firstName, age = person.age;
console.log(userName, age);
