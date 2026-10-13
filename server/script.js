// localStorage.clear()
// localStorage.setItem('user','sarthak')
// localStorage.setItem('age',70)


// var user = localStorage.getItem('age')
// console.log(user)


// localStorage.setItem('Name','Kaka')
// console.log(localStorage.getItem('Name'))
// localStorage.removeItem('Name')



// 1. localStorage.clear() -to clean localStorage
// 2. localStorage.setItem("key","value") - to add new item or overwrite existing ones 
// 3. localStorage.getItem("key") - to get any item
// 4. localStorage.removeItem("key") - to remove any item

var arr = [10,20,30,40,50]
localStorage.setItem('arr',arr)  //yaha par array me store nahi hua hai string me store hua hai

console.log(localStorage.getItem('arr'))


// localStorage kisi bhi obj ko direct save nahi karta phela hamko obj ko string me convert karna padega

var obj = {
    name: 'Sarthak',
    age: 24,
    city: 'Bhopal'
}

var newObj = JSON.stringify(obj)  //convert string
localStorage.setItem('obj',newObj)

//convert  string to object
const obj = localStorage.getItem('obj')
const realObj = JSON.parse(obj)
console.log(realObj)


// JSON.stringify: Array/object -> String
// JSON.parse: String -> Array/object




sessionStorage.setItem('user','sarthak')