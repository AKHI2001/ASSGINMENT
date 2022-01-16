var num = prompt("Enter the number for pattern")

var string = "";

for (var i = 0; i < num; i = i + 1){
     for(var j = 0; j <= i; j = j + 1){
           string += "*";
     }
     string += "<br>";
}
document.write(string);