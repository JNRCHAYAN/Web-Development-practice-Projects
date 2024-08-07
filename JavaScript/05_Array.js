var arr = [10, 3, 3, 5, 3, 6, 3,"Koy" ];
var arrname = ["Chayan", "Roni" ,"Miltan","Miraz"];

console.log(arr);
console.log(arrname);
console.log(arrname.length);
console.log(arr[3]);  //Index value print
arr[3] = "Das";
console.log(arr[3]); 
console.log(arr);

// Find index of an element 

var possition = arr.indexOf("Das");
console.log(possition);

// Push and pop funtion apply in array 
var number = [19,4,45,3,5,3];
number.push("Chayan");
console.log(number);
number.pop();  // Last Element Remove 
console.log(number);

let r = number.shift() // Remove element from fast of an array
console.log(r,number)

let rr = number.unshift(6) // Add element from Last of an array
console.log(rr,number)
// Use Delete keyword
let num = [100,4,45,3,5,3,5,5,4];
delete num[0]
console.log(num)

// Concate Keyword 
let num1 = [100,4,45,3,5,3,5,5,4];
let num2 = [4,44,4445,3,54,3,5,5,4];

let newarr = num1.concat(num2)
console.log(newarr)

// Array sort with sort function
num1.sort() // Original array modefiy 
// It's sort string short not a number
console.log(num1)

// Asseding oder sort using compare function
let compare =(a,b)=>
{
    return a-b
}
num2.sort(compare)
console.log(num2)

// Desnding oder sort using compare function
let dcompare =(a,b)=>
{
    return b-a
}
num.sort(compare)
console.log(num)

// Reverse Function use
num1.reverse()
console.log(num1)

// Use Splice Function
let n = [5,3,6,7,8,9,2,3,2,1]
n.splice(2,4,20,21,22) // Main Array modiify
console.log(n)
n.splice(3) // After Range value Print
console.log(n)
n.splice(3,5)
console.log(n)

// Use Foreach loop

n.forEach((element) => {
    console.log(element*element)
});

let name1 = "Chayan"
let arr1 = Array.from(name1)  // Create an array using array from function string to array
console.log(arr1)

// For of loop
for(let k of num1)
{
    console.log(k)
}
// For in loop   (Use for print array key or index)
for(let k in num1)
{
    console.log(k)
}
