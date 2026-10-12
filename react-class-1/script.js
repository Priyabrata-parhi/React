// const arr = [10,20,30]
// const [a,b,c] = arr


// console.log(a)
// console.log(b)
// console.log(c)

//skip elem
// const arr = [10,20,30,40,50]

// const [a, , , b] = arr

// console.log(a)
// console.log(b)

// default values
// const arr = [10]
// const [a, b=50] = arr
// console.log(a,b)
// console.log(arr.length)
// console.log(arr[2])


// const user = ['priya',21]
// const [namee, age=18] = user  // yaha par user //backup and default value hai
// console.log(namee,age)

// object Destructuring 
// const user = {
//     name: 'harsh',
//     age: 21,
//     role: 'Developer'
// }
// const {role, age} = user
// console.log(age,role)

// Rename variables
// const user = {
//     namee: 'anubhav'
// }
// const {name: username} = user
// console.log(username)


// Default values
// const user = {
//     name: 'harsh'
// }
// const {name,city='delhi'} = user //yaha par default value use ho raha kyu ki actual value nahi mila
// console.log(city)


// Nested object Destructuring
// const user = {
//     name: 'Danish',
//     address: {
//         city: 'patna',
//         pin: 8001
//     }
// }
// const {address: {city}} = user
// console.log(city)


//spread operator

// const arr1 = [10,20,30]
// const arr2 = [...arr1]

// console.log(arr2)

// const a = [1,2,3]
// const b = [4,5]

// const c = [...a,...b,...a]
// console.log(c)

// Add new values
// const nums = [2,3,4]
// const add = [1,...nums,5,6]
// console.log(add)

//spread in object
// const user = {
//     name: 'devil',
//     age: 17
// }

// const copy = [...user]
// console.log(copy)


//merge object
// const obj1 = {a:1}
// const obj2 = {b:2}

// const merged = {...obj1,...obj2}
// console.log(merged)

//overRide properties
// const user = {name: 'Dev', age:19}
// const updateUser = {...user,age: 25}
// console.log(updateUser)


// // Reast in Arrays
// const [first, ...rest] = [10,20,30,40,50]
// console.log(first)
// console.log(rest)


// rest in objects
// const user = {
//     name: 'rahul',
//     age: 12,
//     role: 'developer'
// }
// const {name, ...others} = user
// console.log(name)
// console.log(others)

//rest in Fucnction Parameters
// function sum(...nums){
//     return nums.reduce((acc,val) => {
//         return acc + val
//     },0)
// }

// console.log(sum(20,40,40,20,20))

// import {add,substarct} from './math.js'

// console.log( add(5,6) )
// console.log( substarct(50,6) )

// import yee from './math.js'
// console.log(yee(5,10))


// import areaQueen,{PI} from "./math.js";

// console.log(areaQueen(5))
// console.log(PI)

// import * as mathes from './math.js'

// console.log(mathes.add(15,5))
// console.log(mathes.substarct(10,3))
