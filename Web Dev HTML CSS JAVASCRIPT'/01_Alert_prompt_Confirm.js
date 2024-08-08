// *** use alert prompt and confirm ***

alert("Hello My Webstie")
alert("Enter The value of a : ")
let a = prompt("Enter a Here" ) 
// Set Prompt defult value  
// let a = prompt("Enter a Here" ,"23")  

// Conver this string input in a number
// a = Number.parseInt(a)
alert("You entered a of type : "+(typeof a))
let write= confirm("Do You want to write it on the page")
if(write)
{
    document.write(a)
}
else
{
    document.write("Please allow me to write")
}


// console.table(console) // Show console all methode 