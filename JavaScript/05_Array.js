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
