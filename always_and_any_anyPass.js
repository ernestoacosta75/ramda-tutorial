const R = require('ramda')

// The following means "subtract something from 1"
// const dec1 = R.subtract(1)

// R.__)--> We want to subtract 1 from an unknown number
// const dec2 = R.subtract(R.__, 1)

// console.log(dec1(10))
// console.log(dec2(10))

// addIndex() function
const double = R.multiply(2)
const indexPlusValue = R.addIndex()
// const arr = [10, 20, 30, 40]

// console.log(
//     R.map(double, [10, 20, 30, 40])
// )

// console.log(arr)
// console.log(
//     R.addIndex(R.map)(R.add, arr)
// )

// R.adjust() --> Applies at that index, that function, in that list
// console.log(arr)
// const listDec = R.adjust(R.subtract(R.__, 5))

// console.log(
// R.adjust(1, R.subtract(R.__, 5), arr)
// )

// R.all()
// console.log(R.all(R.equals(10), [10,10,10]))

// R.allPass
// const arr = [10, 10, 10]
// const gt10 = R.gte(R.__, 10)
// const lt20 = R.lte(R.__, 20)
// console.log(
//     R.all(R.allPass([
//        lt20,
//        gt10        
//     ]), arr)
// )

// R.always
// const customConst = R.always('Thea');
// console.log(customConst(20000))

// R.any (logical OR)
// console.log(
//     R.any(R.equals(10), [10,20,30,40])
// )

// R.anyPass (allPass for logical OR)
console.log(
    R.anyPass([
       R.gte(R.__, 10),
       R.lte(R.__, 100) 
    ])(11)
)