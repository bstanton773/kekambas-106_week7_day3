console.log('Hello from closures');

/* 
    JavaScript Closures
*/

let subject = 'JavaScript'; // Block Scoped - window

function homework(student){ // student - function scoped
    console.log(`${student}, did you finish your ${subject} homework?`);
};

homework('Brian');

// console.log(student); // ReferenceError: student is not defined

// Scopes can be nested

let hometown = 'Chicago'; // Block Scoped - window

{
    var state = 'Illinois'; // Global Scope
    let hometown = 'Bloomington'; // Block Scoped
    {
        console.log(`I am from ${hometown}, ${state}`);
    }
}

console.log(`I am from ${hometown}, ${state}`);


// Function Scopes can also be nested

// function outer(){
//     // Define a variable in the outer function scope
//     let outerMessage = 'This is the outer message';

//     // define a function within the outer function scope
//     function inner(){
//         // define a variable in the inner function scope
//         let innerMessage = ' and this is the inner message';
//         // log out the inner variable + outer variable
//         console.log(outerMessage + innerMessage);
//     };

//     // execute the inner function
//     inner();

//     // log our the inner variable + outer variable
//     console.log(outerMessage + innerMessage); // ReferenceError: innerMessage is not defined
// };


// // console.log(outer);

// outer();


// Return a function from a function

function outer(){
    let outerMessage = 'This is the outer message';

    function inner(){
        let innerMessage = ' and this is the inner message';
        console.log(outerMessage + innerMessage)
    }

    return inner;
};

console.log(outer);

let outerReturn = outer(); // return value of the outer function

console.log(outerReturn);
console.log(typeof outerReturn);

// inner() function is a closure
// A closure is a function that preserves the outer scope in its inner scope


outerReturn();

// console.log(outerMessage); // ReferenceError: outerMessage is not defined


// A more practical example

function makeMultiplier(x){
    function times(y){
        return x * y
    }
    return times
};

// Create multiplier function

let double = makeMultiplier(2);

console.log(double);

console.log(double(5));
console.log(double(10));
console.log(double(6));

console.log('============')

let triple = makeMultiplier(3);

console.log(triple);

console.log(triple(5));
console.log(triple(10));
console.log(triple(6));

// Set up "hidden" variables using closures

function setCounter(){
    console.log('Setting counter...');
    let count = 0; // scoped to the setCounter function

    function increaseCount(){
        count++;
        return count;
    }

    return increaseCount;
};


let step = setCounter();

console.log(step);

console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());

// console.log(count); // ReferenceError: count is not defined

console.clear();

// Another Practical Example - hiding variables

// let cache = {};

// function fib(num){
//     if (num < 2){
//         return 1
//     } else if (num in cache) {
//         return cache[num]
//     } else {
//         let fibNum = fib(num - 1) + fib(num - 2);
//         cache[num] = fibNum
//         return fibNum;
//     }
// }

// console.log(fib(6));

// Hide the cache with a closure

function makeFibWithCache(){
    let cache = {};

    function fib(num){
        if (num < 2){
            return 1
        } else if (num in cache) {
            return cache[num]
        } else {
            let fibNum = fib(num - 1) + fib(num - 2);
            cache[num] = fibNum;
            return fibNum;
        };
    };

    return fib;
}

let fibWithCache = makeFibWithCache();

console.log(fibWithCache(100));

// console.log(cache); // ReferenceError: cache is not defined

// IIFE - Immediately Invoked Function Expression
// Syntax - (function to define)(any args)

// let myFullName = (function formatName(first, last){
//     return [first, last].join(' ')
// })('Brian', 'Stanton')



// console.log(myFullName);

let myFullName = ((first, last) => [first, last].join(' '))('Brian', 'Stanton');

console.log(myFullName);

// Set up a closure with an IIFE

let stepByFive = (step => {
    let count = 0;
    function inner(){
        count += step;
        return count
    }
    return inner;
})(5);

console.log(stepByFive);
console.log(stepByFive());
console.log(stepByFive());
console.log(stepByFive());
console.log(stepByFive());
console.log(stepByFive());

// Make the Fib with cache as an IIFE

const myFib = (function makeFibWithCache(){
    let cache = {};

    function fib(num){
        if (num < 2){
            return 1
        } else if (num in cache) {
            return cache[num]
        } else {
            let fibNum = fib(num - 1) + fib(num - 2);
            cache[num] = fibNum;
            return fibNum;
        };
    };

    return fib;
})()


console.log(myFib(100));


// In Class Exercise
// Create an IIFE that has a hidden array of names (starts as an empty array) but will add users to the array every time the function is called


const addName = (() => {
    let names = []
    return name => {
        names.push(name)
        return names
    }
})()



console.log(addName('Brian')); // ['Brian']
console.log(addName('Tatyana')); // ['Brian', 'Tatyana']
console.log(addName('Ripal')); // ['Brian', 'Tatyana', 'Ripal']
console.log(addName('Sam')); // ['Brian', 'Tatyana', 'Ripal', 'Sam']
