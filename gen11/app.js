// let a = 5, b = 5;

// console.log(a + b);

let a = [1,2,3,4,5,6,15]

// 1.
// console.log(Math.max(...a))


// 2

let max = Number.MIN_VALUE

a.forEach(currentNumber =>{
    if(max < currentNumber) {

        max = currentNumber

    }
})

console.log(max)
