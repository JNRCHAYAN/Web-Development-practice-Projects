// Map in array 
let arr = [45,32,21]
// Map create a new array and return this array
let a = arr.map((value)=>
{
    console.log(value)
    return value+1
})

console.log(a)
// console.log(arr)

let b = arr.map((value, index, array)=>
    {
        console.log(value, index, array)
        return value+1
    })
    console.log(b)

// Filter method in array
let arr2 = [45,35,2,4,2,6,55,4]
let a2 = arr2.filter((a)=>  // Main array is not change
{
    return a<10
})
console.log(a2)

// Reduce Method in array
console.log("Reduce Method")
let arr3 = [45,35,2,4,2,6,55,4]
let newarr3 = arr3.reduce((h1,h2)=>
{
    return h1+h2
})
console.log(newarr3)