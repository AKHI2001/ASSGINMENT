alert("This program Checks Maximum out of all three Numbers")
let number1=parseInt(prompt("Enter the first Number"));
let number2=parseInt(prompt("Enter the Second Number"));
let number3=parseInt(prompt("Enter the Third Number"));
let max= Math.max(Math.max(number1,number2),number3);
alert("The Maximum among all three Entered Numbers Is " + max);
