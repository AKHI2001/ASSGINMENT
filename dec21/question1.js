var a=prompt("enter first number");
var b=prompt("enter second number");
var c=prompt("enter third number");
if(a<b && a<c){
     alert(a+ " is smaller number ");
}else if(b<a && b<c){
     alert("b is less than both a and c"); 
}else{
     alert("c is less than both a and b");
}