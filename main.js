const R = require('ramda')

// R.ap() --> Applies a list of functions to a list of values
console.log(
    R.ap([R.multiply(2), R.add(3)], [1,2,3])
)

console.log(
    R.ap([R.concat('tasty'), R.toUpper], ['pizza', 'salad'])
)

const obj = {
    data: 'hello',
    reps: 3
}

console.log(
    R.ap(
        R.pipe(
            R.prop('data'), 
            R.repeat
        ), 
        R.prop('reps'))(obj)
)